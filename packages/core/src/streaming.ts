import { handleActionCall, handleOutput, prepareActionCall } from "./handlers";
import type { Logger } from "./logger";
import { generateEpisode } from "./memory/utils";
import type { TaskRunner } from "./task";
import type {
  ActionCall,
  ActionResult,
  AnyAction,
  AnyAgent,
  AnyContext,
  ContextState,
  Handlers,
  Log,
  Output,
  OutputRef,
  WorkingMemory,
} from "./types";
import { randomUUIDv7 } from "./utils";
import { xmlStreamParser } from "./xml";

type PartialLog = Partial<Log> &
  Pick<Log, "ref" | "id" | "timestamp" | "processed">;

type AsyncIterableStream<T> = AsyncIterable<T> & ReadableStream<T>;

export type StackElement = {
  index: number;
  tag: string;
  attributes: Record<string, any>;
  content: string[];
  done: boolean;
};

export async function handleStream(
  textStream: AsyncGenerator<string>,
  initialIndex: number,
  fn: (el: StackElement) => void,
  tags: Set<string>
) {
  const parser = xmlStreamParser(tags);

  parser.next();

  let current: StackElement | undefined = undefined;
  let stack: StackElement[] = [];

  let index = initialIndex;

  function handleChunk(chunk: string) {
    let result = parser.next(chunk);
    while (!result.done && result.value) {
      if (result.value.type === "start") {
        if (current) stack.push(current);
        current = {
          index: index++,
          tag: result.value.name,
          attributes: result.value.attributes,
          content: [],
          done: false,
        };
        fn(current);
      }

      if (result.value.type === "end") {
        if (current)
          fn({
            ...current,
            done: true,
          });
        current = stack.pop();
      }

      if (result.value.type === "text") {
        if (current) {
          current.content.push(result.value.content);
          fn(current);
        }
      }
      result = parser.next();
    }
  }

  for await (const chunk of textStream) {
    handleChunk(chunk);
  }

  parser.return?.();
}

export async function* wrapStream(
  stream: AsyncIterable<string>,
  prefix: string,
  suffix: string
) {
  yield prefix;
  for await (const value of stream) {
    yield value;
  }
  yield suffix;
}

const defaultTags = new Set([
  "think",
  "response",
  "output",
  "action_call",
  "reasoning",
]);

export function createContextStreamHandler({
  agent,
  chain,
  ctxState,
  agentCtxState,
  logger,
  handlers,
  taskRunner,
  outputs,
  actions,
  actionCalls,
  workingMemory,
  abortSignal,
}: {
  agent: AnyAgent;
  taskRunner: TaskRunner;
  ctxState: ContextState<AnyContext>;
  agentCtxState?: ContextState<AnyContext>;
  chain: Log[];
  logger: Logger;
  handlers?: Partial<Handlers>;
  outputs: Output[];
  actions: AnyAction[];
  actionCalls: Promise<any>[];
  workingMemory: WorkingMemory;
  abortSignal?: AbortSignal;
}) {
  const state = {
    index: 0,
    logsByIndex: new Map<number, PartialLog>(),
  };

  function getOrCreateRef<
    TLog extends Omit<PartialLog, "id" | "timestamp" | "processed">,
  >(
    index: number,
    ref: TLog
  ): TLog & Pick<PartialLog, "id" | "timestamp" | "processed"> {
    if (!state.logsByIndex.has(index)) {
      state.logsByIndex.set(index, {
        id: randomUUIDv7(),
        timestamp: Date.now(),
        processed: false,
        ...ref,
      });
    }

    return state.logsByIndex.get(index)! as TLog &
      Pick<PartialLog, "id" | "timestamp" | "processed">;
  }

  async function pushLogStream(log: Log, done: boolean) {
    if (done) chain.push(log);

    if (log.ref === "thought" && done) {
      workingMemory.thoughts.push(log);
      logger.debug("agent:think", "thought", log.content);
      handlers?.onThinking?.(log);
    }

    if (log.ref === "action_call" && done) {
      workingMemory.calls.push(log);
    }

    if (log.ref === "action_result" && done) {
      workingMemory.results.push(log);

      // Find the most recent thought and action call
      const lastThought =
        workingMemory.thoughts[workingMemory.thoughts.length - 1];
      const lastActionCall =
        workingMemory.calls[workingMemory.calls.length - 1];

      // If we have a complete thought-action-result cycle, generate an episode
      if (lastThought && lastActionCall && agent.memory.generateMemories) {
        // Generate episode with the last thought, action call, and result
        generateEpisode(
          lastThought,
          lastActionCall,
          log,
          agent,
          ctxState.id,
          actions
        ).catch((error) => {
          logger.error(
            "agent:generateEpisode",
            "Failed to generate episode",
            error
          );
        });
      }
    }

    handlers?.onLogStream?.(log, done);
  }

  async function handleActionCallStream(call: ActionCall, done: boolean) {
    if (!done) {
      return pushLogStream(call, false);
    }

    // todo: handle errors
    const { action } = await prepareActionCall({
      call,
      actions,
      logger,
    });

    if (abortSignal?.aborted) return;

    pushLogStream(call, true);

    actionCalls.push(
      handleActionCall({
        call,
        action,
        agent,
        logger,
        state: ctxState,
        taskRunner,
        workingMemory,
        agentState: agentCtxState,
        abortSignal,
      })
        .catch((err) => {
          const result: ActionResult = {
            ref: "action_result",
            id: randomUUIDv7(),
            callId: call.id,
            data: { error: JSON.stringify(err) },
            name: call.name,
            timestamp: Date.now(),
            processed: false,
          };

          return result;
        })
        .then((res) => {
          pushLogStream(res, true);
          return res;
        })
    );
  }

  async function handleOutputStream(outputRef: OutputRef, done: boolean) {
    if (!done) {
      return pushLogStream(outputRef, false);
    }

    const refs = await handleOutput({
      agent,
      logger,
      state: ctxState,
      workingMemory,
      outputs,
      outputRef,
    });

    for (const ref of Array.isArray(refs) ? refs : [refs]) {
      logger.debug("agent:output", "Output processed status", {
        type: ref.type,
        processed: ref.processed,
      });

      workingMemory.outputs.push(ref);
      pushLogStream(ref, true);
    }
  }

  async function handler(el: StackElement) {
    if (abortSignal?.aborted) return;

    state.index = Math.max(el.index, state.index);

    switch (el.tag) {
      case "think":
      case "reasoning": {
        const ref = getOrCreateRef(el.index, {
          ref: "thought",
        });

        pushLogStream(
          {
            ...ref,
            content: el.content.join(""),
          },
          el.done
        );

        break;
      }

      case "action_call": {
        const ref = getOrCreateRef(el.index, {
          ref: "action_call",
        });

        handleActionCallStream(
          {
            ...ref,
            name: el.attributes.name,
            content: el.content.join(""),
            data: undefined,
          },
          el.done
        );

        break;
      }

      case "output": {
        const ref = getOrCreateRef(el.index, {
          ref: "output",
        });

        // Check if the type attribute exists
        if (!el.attributes.type) {
          logger.error("agent:output", "Missing output type attribute", {
            content: el.content.join(""),
            attributes: el.attributes,
          });
          break;
        }

        handleOutputStream(
          {
            ...ref,
            type: el.attributes.type,
            data: el.content.join("").trim(),
          },
          el.done
        );

        break;
      }

      default:
        break;
    }
  }

  return {
    state,
    handler,
    tags: defaultTags,
  };
}
