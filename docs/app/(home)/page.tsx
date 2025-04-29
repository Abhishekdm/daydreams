"use client";
import Link from "next/link";
import { useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Brain, Database, Box, Zap, RotateCw } from "lucide-react";

import ParticleBackground from "../components/ParticleBackground";
import TwitterProof from "../components/TwitterProof";

// Utility function for combining classnames
function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

// Add a standardized button styling function
const buttonStyles = {
  primary:
    "bg-purple-600 hover:bg-purple-500 dark:bg-purple-700 dark:hover:bg-purple-600 text-white",
  secondary:
    "bg-white hover:bg-gray-100 text-purple-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-purple-300",
  outline:
    "border border-white/20 bg-transparent hover:bg-white/10 dark:border-white/10 dark:hover:bg-white/5 ",
  ghost:
    "bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 ",
};

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("npm install @daydreamsai/core");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const gridColor =
    "color-mix(in oklab, var(--color-purple-600) 10%, transparent)";

  return (
    <>
      <ParticleBackground />
      <main className="container relative max-w-[1100px] px-2 py-4 z-[5] lg:py-8">
        <div
          style={{
            background:
              "repeating-linear-gradient(to bottom, transparent, rgba(255,255,255,0.03) 500px, transparent 1000px)",
          }}
        >
          {/* Content sections will go here */}
          <Hero />
          {/* <Feedback /> */}
          {/* <Installation /> */}
          <AgentShowcase />
          {/* <Features /> */}
          {/* <Applications /> */}
          <Providers />
          <Chains />
          {/* <TwitterProof /> */}
          {/* <Highlights /> */}
          <CallToAction />
        </div>
      </main>
    </>
  );
}

// Placeholder components to be filled in later
function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("npm install @daydreamsai/core");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative z-[2] flex flex-col border-x border-t  px-6 pt-12 max-md:text-center md:px-12 md:pt-16 max-lg:overflow-hidden ">
      {/* <div className="mx-auto w-full max-w-3xl mb-8">
        <img className="mx-auto" src="/Daydreams.png" alt="Daydreams Logo" />
      </div> */}

      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Typescript autonomous <br /> agent framework
      </h1>

      <p className="text-xl md:text-2xl  text-center mb-12">
        lose the handrails, start daydreaming
      </p>

      <div className="max-w-2xl mx-auto w-full mb-12">
        <div className="bg-black/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <button
              onClick={handleCopy}
              className="text-xs  transition-colors flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <div className="flex items-center justify-center bg-black/30 dark:bg-black/30 rounded-lg p-6">
            <code className="text-base /90 font-mono tracking-tight">
              npm install @daydreamsai/core
            </code>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mb-12">
        <Link
          href="/docs"
          className={cn(
            buttonStyles.secondary,
            "px-4 py-2.5 text-sm font-semibold shadow-sm transition-colors rounded-md"
          )}
        >
          Get Started
        </Link>
        <Link
          href="/docs/concepts"
          className={cn(
            buttonStyles.outline,
            "px-4 py-2.5 text-sm font-semibold transition-colors rounded-md"
          )}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

function Feedback() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden border-x border-t px-6 py-8 md:py-16">
      <div
        className="absolute inset-x-0 bottom-0 z-[-1] h-24 opacity-30 duration-1000 animate-in fade-in"
        style={{
          maskImage: "linear-gradient(to bottom,transparent,white)",
          backgroundImage:
            "linear-gradient(to right, #4ebfff, transparent, #e92a67)",
        }}
      />
      <p className="text-center font-medium /60">
        Trusted by builders and developers worldwide
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-8">
        <div className="flex items-center justify-center h-12 w-24 opacity-70 hover:opacity-100 transition-opacity">
          <div className="text-xl font-bold ">Company 1</div>
        </div>
        <div className="flex items-center justify-center h-12 w-24 opacity-70 hover:opacity-100 transition-opacity">
          <div className="text-xl font-bold ">Company 2</div>
        </div>
        <div className="flex items-center justify-center h-12 w-24 opacity-70 hover:opacity-100 transition-opacity">
          <div className="text-xl font-bold ">Company 3</div>
        </div>
        <div className="flex items-center justify-center h-12 w-24 opacity-70 hover:opacity-100 transition-opacity">
          <div className="text-xl font-bold ">Company 4</div>
        </div>
      </div>

      <Link
        href="/showcase"
        className={cn(
          buttonStyles.ghost,
          "mt-6 px-4 py-2 text-sm font-medium rounded-md transition-colors"
        )}
      >
        View Showcase
      </Link>
    </div>
  );
}

function Installation() {
  const [copied, setCopied] = useState(false);
  const [configCopied, setConfigCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("npm install @daydreamsai/core");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleConfigCopy = async () => {
    await navigator.clipboard
      .writeText(`import { Agent } from "@daydreamsai/core";

const agent = new Agent({
  apiKey: "your-api-key",
  chain: "ethereum", // or "solana", "polygon", etc.
  options: {
    model: "gpt-4",
    autoExecute: true,
  }
});`);
    setConfigCopied(true);
    setTimeout(() => setConfigCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col gap-2 border-l border-t px-6 py-12 md:py-16">
        <div className="inline-flex size-7 items-center justify-center rounded-full bg-purple-600 font-medium ">
          1
        </div>
        <h3 className="text-xl font-semibold">Install</h3>
        <p className="mb-8 /80">Install Daydreams with npm or yarn</p>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <button
              onClick={handleCopy}
              className="text-xs /60 hover:/90 transition-colors flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <div className="flex items-center justify-center bg-black/30 rounded-lg p-6">
            <code className="text-base /90 font-mono tracking-tight">
              npm install @daydreamsai/core
            </code>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-l border-t px-6 py-12 md:py-16">
        <div className="inline-flex size-7 items-center justify-center rounded-full bg-purple-600 font-medium ">
          2
        </div>
        <h3 className="text-xl font-semibold">Configure</h3>
        <p className="mb-8 /80">Set up your Daydreams configuration</p>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <button
              onClick={handleConfigCopy}
              className="text-xs /60 hover:/90 transition-colors flex items-center gap-1.5"
            >
              {configCopied ? (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <div className="bg-black/30 rounded-lg p-4 overflow-auto">
            <pre className="text-sm /90 font-mono">
              <code>{`import { Agent } from "@daydreamsai/core";

const agent = createDreams({
  apiKey: "your-api-key",
  chain: "ethereum", // or "solana", "polygon", etc.
  options: {
    model: "gpt-4",
    autoExecute: true,
  }
});`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

function AgentShowcase() {
  const [activeTab, setActiveTab] = useState("ai-sdk");

  const tabs = [
    {
      id: "ai-sdk",
      title: "AI SDK",
      icon: Brain,
      content:
        "Built on top of the Vercel AI SDK, Daydreams seamlessly integrates with different AI providers and models",
    },
    {
      id: "memory",
      title: "Memory",
      icon: Database,
      content:
        "Persistent memory storage with vector embeddings for long-term recall and contextual understanding",
    },
    {
      id: "contexts",
      title: "Contexts",
      icon: Box,
      content:
        "Maintain state and render structured data to your LLM with React-like components",
    },
    {
      id: "actions",
      title: "Actions",
      icon: Zap,
      content:
        "Define capabilities for your agent with type-safe actions that can interact with external systems",
    },
    {
      id: "io",
      title: "I/O",
      icon: RotateCw,
      content:
        "Handle inputs and outputs with structured formats for consistent agent communication",
    },
    // {
    //   id: "sandbox",
    //   title: "Sandbox",
    //   icon: "🏝️",
    //   content:
    //     "Develop and test your agents in a controlled environment before deploying to production",
    // },
  ];

  return (
    <div className="border-x border-t py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5" />

      <h2 className="text-center text-2xl font-semibold mb-2  relative z-10">
        <span className=" px-2 py-1">_{">"} Agent Architecture</span>
      </h2>
      <p className="text-center /70 mb-8 relative z-10 max-w-2xl mx-auto">
        Compose powerful agents with a modular, type-safe architecture
      </p>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="bg-black/5 border border-white/10 overflow-hidden">
          <div className="flex overflow-x-auto bg-white/5 backdrop-blur-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 flex items-center gap-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? " border-b-2 border-purple-500"
                    : "/60 hover:"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.title}</span>
              </button>
            ))}
          </div>

          <div className="p-6">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${
                  activeTab === tab.id ? "block" : "hidden"
                }`}
              >
                <div>
                  <h3 className="text-2xl font-semibold  mb-4 flex items-center gap-2">
                    <tab.icon className="w-6 h-6 text-purple-400" />
                    {tab.title}
                  </h3>
                  <p className="/80 text-lg leading-relaxed mb-6">
                    {tab.content}
                  </p>

                  <div className="mt-4">
                    <Link
                      href={(() => {
                        switch (tab.id) {
                          case "memory":
                            return "/docs/concepts/memory";
                          case "contexts":
                            return "/docs/concepts/contexts";
                          case "actions":
                            return "/docs/concepts/actions";
                          case "io":
                            return "/docs/concepts/inputs"; // Link I/O to Inputs page
                          case "ai-sdk": // Link AI SDK to concepts index for now
                          default:
                            return "/docs/concepts"; // TODO: Link to a new docs page about ai-sdk and providers
                        }
                      })()}
                      className={cn(
                        buttonStyles.ghost,
                        "inline-flex items-center px-4 py-2 text-sm rounded-md"
                      )}
                    >
                      <span>Learn more</span>
                      <svg
                        className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className="md:col-span-2 bg-black/5 rounded-lg border border-white/10 p-5">
                  {activeTab === "ai-sdk" && (
                    <pre className="text-sm font-mono /90 overflow-auto">
                      <code>
                        <span className="text-purple-400">import</span> {"{"}
                        <span className="/90">createDreams</span>
                        {"}"} <span className="text-purple-400">from</span>{" "}
                        <span className="text-green-400">
                          "@daydreamsai/core"
                        </span>
                        ;<span className="text-purple-400">import</span> {"{"}
                        <span className="/90">openai</span>
                        {"}"} <span className="text-purple-400">from</span>{" "}
                        <span className="text-green-400">"@ai-sdk/openai"</span>
                        ;<span className="text-purple-400">import</span> {"{"}
                        <span className="/90">anthropic</span>
                        {"}"} <span className="text-purple-400">from</span>{" "}
                        <span className="text-green-400">
                          "@ai-sdk/anthropic"
                        </span>
                        ;
                        <br />
                        <br />
                        <span className="text-gray-500 italic">
                          // Easily switch LLM providers
                        </span>
                        <br />
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-blue-300">agent</span> ={" "}
                        <span className="text-yellow-300">createDreams</span>(
                        {"{"}
                        <br />
                        <span className="text-gray-500 italic pl-4">
                          // Use OpenAI, Anthropic, Groq, Google, Mistral,
                          Ollama, etc.
                        </span>
                        <br />
                        <span className="/90 pl-4">model:</span>{" "}
                        <span className="text-yellow-300">openai</span>(
                        <span className="text-green-400">"gpt-4o-mini"</span>),
                        <br />
                        <span className="text-gray-500 italic pl-4">
                          // reasoningModel:
                          anthropic("claude-3-haiku-20240307"),
                        </span>
                        <br />
                        <span className="/90 pl-4">
                          /* ... other config ... */
                        </span>
                        <br />
                        {"}"});
                      </code>
                    </pre>
                  )}
                  {activeTab === "memory" && (
                    <pre className="text-sm font-mono /90 overflow-auto">
                      <code>
                        <span className="text-purple-400">import</span> {"{"}
                        <span className="/90">
                          createDreams, createMemory, createMemoryStore,
                          createVectorStore
                        </span>
                        {"}"} <span className="text-purple-400">from</span>{" "}
                        <span className="text-green-400">
                          "@daydreamsai/core"
                        </span>
                        ;<span className="text-purple-400">import</span> {"{"}
                        <span className="/90">createChromaVectorStore</span>
                        {"}"} <span className="text-purple-400">from</span>{" "}
                        <span className="text-green-400">
                          "@daydreamsai/chroma"
                        </span>
                        ;
                        <br />
                        <br />
                        <span className="text-gray-500 italic">
                          // Configure memory stores
                        </span>
                        <br />
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-blue-300">agent</span> ={" "}
                        <span className="text-yellow-300">createDreams</span>(
                        {"{"}
                        <br />
                        <span className="/90 pl-4">model:</span>{" "}
                        <span className="text-yellow-300">/* ... */</span>,
                        <br />
                        <span className="/90 pl-4">memory:</span>{" "}
                        <span className="text-yellow-300">createMemory</span>(
                        <br />
                        <span className="text-gray-500 italic pl-8">
                          // Key-value store (in-memory by default)
                        </span>
                        <br />
                        <span className="pl-8">
                          <span className="text-yellow-300">
                            createMemoryStore
                          </span>
                          (),
                        </span>
                        <br />
                        <span className="text-gray-500 italic pl-8">
                          // Vector store (ChromaDB example)
                        </span>
                        <br />
                        <span className="pl-8">
                          <span className="text-yellow-300">
                            createChromaVectorStore
                          </span>
                          (<span className="text-green-400">"episodes"</span>)
                        </span>
                        <br />
                        <span className="pl-4">),</span>
                        <br />
                        <span className="/90 pl-4">
                          /* ... other config ... */
                        </span>
                        <br />
                        {"}"});
                      </code>
                    </pre>
                  )}
                  {activeTab === "contexts" && (
                    <pre className="text-sm font-mono /90 overflow-auto">
                      <code>
                        <span className="text-purple-400">import</span> {"{"}{" "}
                        <span className="/90">context</span> {"}"}{" "}
                        <span className="text-purple-400">from</span>{" "}
                        <span className="text-green-400">
                          "@daydreamsai/core"
                        </span>
                        ;
                        <br />
                        <span className="text-purple-400">import</span> {"{"}{" "}
                        <span className="/90">z</span> {"}"}{" "}
                        <span className="text-purple-400">from</span>{" "}
                        <span className="text-green-400">"zod"</span>;
                        <br />
                        <br />
                        <span className="text-gray-500 italic">
                          {/*// Define context for specific tasks or interactions*/}
                        </span>
                        <br />
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-blue-300">chatContext</span> ={" "}
                        <span className="text-yellow-300">context</span>({"{"}
                        <br />
                        {"  "}
                        <span className="/90">type:</span>{" "}
                        <span className="text-green-400">"chatSession"</span>,
                        <br />
                        {"  "}
                        <span className="/90">schema:</span>{" "}
                        <span className="text-blue-300">z</span>.
                        <span className="text-yellow-300">object</span>({"{"}
                        <br />
                        {"    "}
                        <span className="/90">sessionId:</span>{" "}
                        <span className="text-blue-300">z</span>.
                        <span className="text-yellow-300">string</span>()
                        <br />
                        {"  "}
                        {"}),"}
                        <br />
                        {"  "}
                        <span className="/90">create:</span>{" "}
                        <span className="text-yellow-300">()</span> {"=>"} (
                        {"{"}
                        <br />
                        {"    "}
                        <span className="/90">history:</span> []
                        <br />
                        {"  "}
                        {"}),"}
                        <br />
                        {"  "}
                        <span className="/90">render:</span>{" "}
                        <span className="text-yellow-300">(state)</span> {"=>"}{" "}
                        {"{"}
                        <br />
                        {"    "}
                        <span className="text-purple-400">return</span>{" "}
                        <span className="text-blue-300">
                          state.memory.history.join('\\n')
                        </span>
                        ;
                        <br />
                        {"  "}
                        {"}"},
                        <br />
                        {"  "}
                        <span className="/90">{`/* ... instructions, actions, etc. ... */`}</span>
                        <br />
                        {"}"});
                      </code>
                    </pre>
                  )}
                  {activeTab === "actions" && (
                    <pre className="text-sm font-mono /90 overflow-auto">
                      <code>
                        <span className="text-purple-400">import</span> {"{"}{" "}
                        <span className="/90">action</span> {"}"}{" "}
                        <span className="text-purple-400">from</span>{" "}
                        <span className="text-green-400">
                          "@daydreamsai/core"
                        </span>
                        ;
                        <br />
                        <span className="text-purple-400">import</span> {"{"}{" "}
                        <span className="/90">z</span> {"}"}{" "}
                        <span className="text-purple-400">from</span>{" "}
                        <span className="text-green-400">"zod"</span>;
                        <br />
                        <br />
                        <span className="text-gray-500 italic">
                          {/*// Define an agent capability*/}
                        </span>
                        <br />
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-blue-300">lookupUser</span> ={" "}
                        <span className="text-yellow-300">action</span>({"{"}
                        <br />
                        {"  "}
                        <span className="/90">name:</span>{" "}
                        <span className="text-green-400">"lookupUser"</span>,
                        <br />
                        {"  "}
                        <span className="/90">description:</span>{" "}
                        <span className="text-green-400">
                          "Gets user details by ID"
                        </span>
                        ,
                        <br />
                        {"  "}
                        <span className="/90">schema:</span>{" "}
                        <span className="text-blue-300">z</span>.
                        <span className="text-yellow-300">object</span>({"{"}
                        <br />
                        {"    "}
                        <span className="/90">userId:</span>{" "}
                        <span className="text-blue-300">z</span>.
                        <span className="text-yellow-300">string</span>()
                        <br />
                        {"  "}
                        {"}),"}
                        <br />
                        {"  "}
                        <span className="text-purple-400">async</span>{" "}
                        <span className="text-yellow-300">handler</span>({"{"}{" "}
                        <span className="text-blue-300">userId</span> {"}"},{" "}
                        <span className="text-blue-300">ctx</span>,{" "}
                        <span className="text-blue-300">agent</span>) {"{"}
                        <br />
                        {"    "}
                        <span className="text-gray-500 italic">
                          {/*// ... fetch user from DB or API ...*/}
                        </span>
                        <br />
                        {"    "}
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-blue-300">user</span> = {"{"}{" "}
                        <span className="/90">name:</span>{" "}
                        <span className="text-green-400">"Example User"</span>,{" "}
                        <span className="/90">id:</span>{" "}
                        <span className="text-blue-300">userId</span> {"}"};
                        <br />
                        {"    "}
                        <span className="text-purple-400">return</span>{" "}
                        <span className="text-blue-300">user</span>;
                        <br />
                        {"  "}
                        {"}"}
                        <br />
                        {"}"});
                      </code>
                    </pre>
                  )}
                  {activeTab === "io" && (
                    <pre className="text-sm font-mono /90 overflow-auto">
                      <code>
                        <span className="text-purple-400">import</span> {"{"}{" "}
                        <span className="/90">input, output</span> {"}"}{" "}
                        <span className="text-purple-400">from</span>{" "}
                        <span className="text-green-400">
                          "@daydreamsai/core"
                        </span>
                        ;
                        <br />
                        <span className="text-purple-400">import</span> {"{"}{" "}
                        <span className="/90">z</span> {"}"}{" "}
                        <span className="text-purple-400">from</span>{" "}
                        <span className="text-green-400">"zod"</span>;
                        <br />
                        <br />
                        <span className="text-gray-500 italic">
                          {/*// Define an input source*/}
                        </span>
                        <br />
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-blue-300">cliInput</span> ={" "}
                        <span className="text-yellow-300">input</span>({"{"}
                        <br />
                        {"  "}
                        <span className="/90">type:</span>{" "}
                        <span className="text-green-400">"cli:message"</span>,
                        <br />
                        {"  "}
                        <span className="/90">schema:</span>{" "}
                        <span className="text-blue-300">z</span>.
                        <span className="text-yellow-300">object</span>({"{"}
                        <br />
                        {"    "}
                        <span className="/90">user:</span>{" "}
                        <span className="text-blue-300">z</span>.
                        <span className="text-yellow-300">string</span>(),
                        <br />
                        {"    "}
                        <span className="/90">text:</span>{" "}
                        <span className="text-blue-300">z</span>.
                        <span className="text-yellow-300">string</span>()
                        <br />
                        {"  "}
                        {"}),"}
                        <br />
                        {"  "}
                        <span className="/90">subscribe:</span>{" "}
                        <span className="text-yellow-300">(send, agent)</span>{" "}
                        {"=>"} {"{"}
                        <br />
                        {"    "}
                        <span className="text-gray-500 italic">
                          {/*// ... setup readline/CLI listener ...*/}
                        </span>
                        <br />
                        {"  "}
                        {"}"},
                        <br />
                        {"}"});
                        <br />
                        <br />
                        <span className="text-gray-500 italic">
                          {/*// Define an output handler*/}
                        </span>
                        <br />
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-blue-300">cliOutput</span> ={" "}
                        <span className="text-yellow-300">output</span>({"{"}
                        <br />
                        {"  "}
                        <span className="/90">type:</span>{" "}
                        <span className="text-green-400">"cli:message"</span>,
                        <br />
                        {"  "}
                        <span className="/90">schema:</span>{" "}
                        <span className="text-blue-300">z</span>.
                        <span className="text-yellow-300">string</span>(),
                        <br />
                        {"  "}
                        <span className="text-purple-400">async</span>{" "}
                        <span className="text-yellow-300">handler</span>({"{"}{" "}
                        <span className="text-blue-300">data</span>,{" "}
                        <span className="text-blue-300">ctx</span>,{" "}
                        <span className="text-blue-300">agent</span> {"}"}){" "}
                        {"{"}
                        <br />
                        {"    "}
                        <span className="text-gray-500 italic">
                          {/*// ... console.log(data) ...*/}
                        </span>
                        <br />
                        {"  "}
                        {"}"},
                        <br />
                        {"}"});
                      </code>
                    </pre>
                  )}
                  {activeTab === "sandbox" && (
                    <pre className="text-sm font-mono /90 overflow-auto">
                      <code>
                        <span className="text-purple-400">import</span> {"{"}
                        <span className="/90">createDreams, createSandbox</span>
                        {"}"} <span className="text-purple-400">from</span>{" "}
                        <span className="text-green-400">
                          "@daydreamsai/core"
                        </span>
                        ;
                        <br />
                        <span className="text-purple-400">import</span> {"{"}
                        <span className="/90">logger</span>
                        {"}"} <span className="text-purple-400">from</span>{" "}
                        <span className="text-green-400">
                          "@daydreamsai/core/debug"
                        </span>
                        ;
                        <br />
                        <br />
                        <span className="text-gray-500 italic">
                          // Create a development sandbox
                        </span>
                        <br />
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-blue-300">sandbox</span> ={" "}
                        <span className="text-yellow-300">createSandbox</span>(
                        {"{"}
                        <br />
                        <span className="text-gray-500 italic pl-4">
                          // Mock external services
                        </span>
                        <br />
                        <span className="/90 pl-4">services:</span> {"{"}
                        <br />
                        <span className="/90 pl-8">database:</span>{" "}
                        <span className="text-yellow-300">mockDatabase</span>(),
                        <br />
                        <span className="/90 pl-8">api:</span>{" "}
                        <span className="text-yellow-300">mockApiService</span>
                        ()
                        <br />
                        <span className="pl-4">{"}"},</span>
                        <br />
                        <br />
                        <span className="text-gray-500 italic pl-4">
                          // Record all agent interactions
                        </span>
                        <br />
                        <span className="/90 pl-4">recorder:</span> {"{"}
                        <br />
                        <span className="/90 pl-8">enabled:</span>{" "}
                        <span className="text-orange-300">true</span>,<br />
                        <span className="/90 pl-8">path:</span>{" "}
                        <span className="text-green-400">"./recordings"</span>
                        <br />
                        <span className="pl-4">{"}"},</span>
                        <br />
                        <br />
                        <span className="text-gray-500 italic pl-4">
                          // Debugging tools
                        </span>
                        <br />
                        <span className="/90 pl-4">debug:</span> {"{"}
                        <br />
                        <span className="/90 pl-8">logLevel:</span>{" "}
                        <span className="text-green-400">"verbose"</span>,<br />
                        <span className="/90 pl-8">traceActions:</span>{" "}
                        <span className="text-orange-300">true</span>,<br />
                        <span className="/90 pl-8">slowMode:</span>{" "}
                        <span className="text-orange-300">false</span>
                        <br />
                        <span className="pl-4">{"}"},</span>
                        <br />
                        <br />
                        <span className="text-gray-500 italic pl-4">
                          // Test cases
                        </span>
                        <br />
                        <span className="/90 pl-4">scenarios:</span> [
                        <br />
                        <span className="pl-8">{"{"}</span>
                        <br />
                        <span className="/90 pl-12">name:</span>{" "}
                        <span className="text-green-400">
                          "Basic conversation"
                        </span>
                        ,<br />
                        <span className="/90 pl-12">input:</span>{" "}
                        <span className="text-green-400">
                          "Hello, who are you?"
                        </span>
                        ,<br />
                        <span className="/90 pl-12">
                          expectedOutputContains:
                        </span>{" "}
                        <span className="text-green-400">
                          "I'm an assistant"
                        </span>
                        <br />
                        <span className="pl-8">{"}"}</span>
                        <br />
                        <span className="pl-4">]</span>
                        <br />
                        {"}"});
                        <br />
                        <br />
                        <span className="text-gray-500 italic">
                          // Connect agent to sandbox
                        </span>
                        <br />
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-blue-300">agent</span> ={" "}
                        <span className="text-yellow-300">createDreams</span>(
                        {"{"}
                        <br />
                        <span className="/90 pl-4">model:</span>{" "}
                        <span className="text-yellow-300">openai</span>(
                        <span className="text-green-400">"gpt-4-turbo"</span>),
                        <br />
                        <span className="/90 pl-4">extensions:</span> [
                        <span className="text-blue-300">logger</span>]<br />
                        {"}"}).<span className="text-yellow-300">connect</span>(
                        <span className="text-blue-300">sandbox</span>);
                        <br />
                        <br />
                        <span className="text-gray-500 italic">
                          // Run test scenarios
                        </span>
                        <br />
                        <span className="text-blue-300">sandbox</span>.
                        <span className="text-yellow-300">runTests</span>().
                        <span className="text-yellow-300">then</span>(
                        <span className="text-blue-300">results</span> {"{"}
                        <br />
                        <span className="text-yellow-300 pl-4">console</span>.
                        <span className="text-yellow-300">log</span>(
                        <span className="text-green-400">
                          "Tests completed:"
                        </span>
                        , <span className="text-blue-300">results</span>);
                        <br />
                        {"}"});
                      </code>
                    </pre>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="grid grid-cols-1 border-x border-t md:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-full flex flex-row items-start justify-center border-l border-t p-8 pb-2 text-center">
        <h2 className="bg-purple-600  px-2 text-2xl font-semibold">Features</h2>
      </div>

      {/* Feature Card 1 */}
      <Link
        href="/docs/introduction"
        className="group bg-white/5 backdrop-blur-sm p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="p-2 rounded-lg bg-purple-500/20 text-purple-300">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium ">Installation</h3>
        </div>
        <p className="text-sm /80">
          Learn the basics and get up and running in minutes
        </p>
        <div
          className={cn(
            buttonStyles.ghost,
            "mt-4 inline-flex items-center px-3 py-1 text-sm rounded-md"
          )}
        >
          <span>Get started</span>
          <svg
            className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </Link>

      {/* Feature Card 2 */}
      <Link
        href="/docs/agents/overview"
        className="group bg-white/5 backdrop-blur-sm p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="p-2 rounded-lg bg-purple-500/20 text-purple-300">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium ">Agents</h3>
        </div>
        <p className="text-sm /80">Build agents with Daydreams</p>
        <div
          className={cn(
            buttonStyles.ghost,
            "mt-4 inline-flex items-center px-3 py-1 text-sm rounded-md"
          )}
        >
          <span>View guides</span>
          <svg
            className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </Link>

      {/* Feature Card 3 */}
      <Link
        href="/docs/guides/twitter"
        className="group bg-white/5 backdrop-blur-sm p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="p-2 rounded-lg bg-purple-500/20 text-purple-300">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium ">Guide</h3>
        </div>
        <p className="text-sm /80">Types and interfaces</p>
        <div
          className={cn(
            buttonStyles.ghost,
            "mt-4 inline-flex items-center px-3 py-1 text-sm rounded-md"
          )}
        >
          <span>Explore Guide</span>
          <svg
            className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
}

type ApplicationType = {
  title: string;
  description: string;
  gradient: string;
  icon: string;
  features: string[];
  codeExample: string;
  benefits: string[];
};

type ApplicationsType = {
  [key: string]: ApplicationType;
};

function Applications() {
  const [activeApp, setActiveApp] = useState<keyof ApplicationsType>("gaming");

  const applications: ApplicationsType = {
    gaming: {
      title: "Autonomous Gaming",
      description:
        "Build agents that play games, optimize strategies, and interact with gaming ecosystems.",
      gradient: "from-purple-600/30 to-pink-600/30",
      icon: "🎮",
      features: [
        "Real-time game state analysis",
        "Strategic decision making",
        "Multi-agent coordination",
        "Learning from gameplay data",
      ],
      codeExample: `const gameAgent = createDreams({
  model: "gpt-4",
  memory: createGameMemory(),
  actions: [
    moveAction,
    attackAction,
    defendAction
  ]
});`,
      benefits: [
        "24/7 automated gameplay",
        "Optimized resource management",
        "Competitive strategy development",
        "Enhanced player experience",
      ],
    },
    yield: {
      title: "Autonomous Yield",
      description:
        "Create agents that manage DeFi positions, optimize yield farming, and automate financial strategies.",
      gradient: "from-blue-600/30 to-teal-600/30",
      icon: "📈",
      features: [
        "Real-time market analysis",
        "Multi-protocol yield optimization",
        "Risk management",
        "Gas-efficient execution",
      ],
      codeExample: `const yieldAgent = createDreams({
  model: "claude-3",
  memory: createMarketMemory(),
  actions: [
    swapAction,
    depositAction,
    harvestAction
  ]
});`,
      benefits: [
        "Automated yield optimization",
        "24/7 market monitoring",
        "Risk-adjusted returns",
        "Cross-chain opportunities",
      ],
    },
    dao: {
      title: "Autonomous DAOs",
      description:
        "Develop governance agents that vote, propose, and execute decisions on behalf of DAOs.",
      gradient: "from-green-600/30 to-yellow-600/30",
      icon: "🏛️",
      features: [
        "Proposal analysis",
        "Voting strategy",
        "Treasury management",
        "Stakeholder alignment",
      ],
      codeExample: `const daoAgent = createDreams({
  model: "gpt-4",
  memory: createGovernanceMemory(),
  actions: [
    proposeAction,
    voteAction,
    executeAction
  ]
});`,
      benefits: [
        "Automated governance",
        "Efficient decision-making",
        "Transparent operations",
        "Community alignment",
      ],
    },
    worlds: {
      title: "Autonomous Worlds",
      description:
        "Build persistent digital worlds with embedded agents that evolve and interact autonomously.",
      gradient: "from-orange-600/30 to-red-600/30",
      icon: "🌍",
      features: [
        "World state management",
        "Agent interactions",
        "Resource economics",
        "Emergent behavior",
      ],
      codeExample: `const worldAgent = createDreams({
  model: "claude-3",
  memory: createWorldMemory(),
  actions: [
    interactAction,
    tradeAction,
    buildAction
  ]
});`,
      benefits: [
        "Persistent worlds",
        "Dynamic ecosystems",
        "Emergent narratives",
        "Scalable interactions",
      ],
    },
  };

  return (
    <div className="border-x border-t py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5" />

      <h2 className="text-center text-2xl font-semibold mb-2  relative z-10">
        <span className=" px-2 py-1">_{">"} Applications</span>
      </h2>
      <p className="text-center /70 mb-12 relative z-10 max-w-2xl mx-auto">
        Endless possibilities for autonomous agents
      </p>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-black/20 border border-white/10 rounded-lg overflow-hidden backdrop-blur-sm">
          {/* Tabs */}
          <div className="flex overflow-x-auto bg-white/5">
            {Object.entries(applications).map(([key, app]) => (
              <button
                key={key}
                onClick={() => setActiveApp(key as keyof ApplicationsType)}
                className={`px-6 py-4 flex items-center gap-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeApp === key
                    ? " border-b-2 border-purple-500 bg-white/5"
                    : "/60 hover: hover:bg-white/5"
                }`}
              >
                <span className="text-xl">{app.icon}</span>
                <span>{app.title}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Details */}
              <div>
                <h3 className="text-2xl font-semibold  mb-4 flex items-center gap-3">
                  <span className="text-3xl">
                    {applications[activeApp].icon}
                  </span>
                  {applications[activeApp].title}
                </h3>
                <p className="/80 text-lg mb-8">
                  {applications[activeApp].description}
                </p>

                <div className="mb-8">
                  <h4 className=" font-medium mb-4">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {applications[activeApp].features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 /80">
                        <svg
                          className="w-5 h-5 text-purple-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className=" font-medium mb-4">Benefits</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {applications[activeApp].benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 /80">
                        <svg
                          className="w-5 h-5 text-purple-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column - Code Example */}
              <div>
                <div className="bg-black/30 rounded-lg border border-white/10 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="/40 text-sm">agent.ts</span>
                  </div>
                  <pre className="p-4 overflow-auto">
                    <code className="text-sm font-mono /90">
                      {applications[activeApp].codeExample}
                    </code>
                  </pre>
                </div>

                <div className="mt-8 flex justify-end">
                  <Link
                    href="/docs/applications"
                    className={cn(
                      buttonStyles.ghost,
                      "inline-flex items-center px-4 py-2 text-sm rounded-md"
                    )}
                  >
                    <span>
                      Learn more about {applications[activeApp].title}
                    </span>
                    <svg
                      className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Providers() {
  const providers = [
    {
      name: "OpenAI",
      logo: "/providers/openai.svg",
      color: "#00A67E",
    },
    {
      name: "Anthropic",
      logo: "/providers/anthropic.svg",
      color: "#C084FC",
    },
    {
      name: "Groq",
      logo: "/providers/groq.svg",
      color: "#FF6B6B",
    },
    {
      name: "Mistral",
      logo: "/providers/mistral.svg",
      color: "#4F46E5",
    },
    {
      name: "DeepSeek",
      logo: "/providers/deepseek.svg",
      color: "#2563EB",
    },
    {
      name: "Google",
      logo: "/providers/google.svg",
      color: "#34A853",
    },
  ];

  return (
    <div className="border-x border-t py-16 px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10 animate-pulse" />

      <h2 className="text-center text-2xl font-semibold mb-2  relative z-10">
        <span className=" px-2 py-1">_{">"} Supported Providers</span>
      </h2>
      <p className="text-center /70 mb-8 relative z-10 max-w-2xl mx-auto">
        Choose your preferred foundation models
      </p>

      <div className="max-w-4xl mx-auto relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {providers.map((provider, index) => (
            <div
              key={provider.name}
              className="group relative"
              style={{
                animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
              }}
            >
              <div
                className="absolute inset-0 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"
                style={{ backgroundColor: provider.color }}
              />
              <div className="relative bg-white/10 backdrop-blur-sm w-24 h-24 rounded-full flex items-center justify-center border border-white/20 hover:border-white/40 transition-all transform hover:scale-110">
                <img
                  src={provider.logo}
                  alt={`${provider.name} logo`}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <p className="text-center mt-2 text-sm /80">{provider.name}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}

function Chains() {
  const chains = [
    {
      name: "Ethereum",
      logo: "/chains/eth-logo.svg",
      color: "#627EEA",
    },
    {
      name: "Solana",
      logo: "/chains/solana-logo.svg",
      color: "#9945FF",
    },
    {
      name: "Hyperliquid",
      logo: "/chains/hl-logo.svg",
      color: "#0066FF",
    },
    {
      name: "StarkNet",
      logo: "/chains/Starknet.svg",
      color: "#00FFD1",
    },
    {
      name: "Optimism",
      logo: "/chains/optimism-logo.svg",
      color: "#FF0420",
    },
    {
      name: "Arbitrum",
      logo: "/chains/arbitrum-logo.svg",
      color: "#28A0F0",
    },
    {
      name: "Base",
      logo: "/chains/base-logo.svg",
      color: "#0052FF",
    },
  ];

  return (
    <div className="border-x border-t py-16 px-8 relative overflow-hidden">
      {/* Animated blockchain graphic in the background */}

      <h2 className="text-center text-2xl font-semibold mb-2  relative z-10">
        <span className=" px-2 py-1">_{">"} Supported Chains</span>
      </h2>
      <p className="text-center /70 mb-8 relative z-10 max-w-2xl mx-auto">
        Build agents on your favorite blockchain networks
      </p>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {chains.map((chain, index) => (
            <div
              key={chain.name}
              className="group relative"
              style={{
                animation: `float ${2.5 + index * 0.3}s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div
                className="absolute inset-0 rounded-xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity"
                style={{ backgroundColor: chain.color }}
              />
              <div className="relative bg-white/5 backdrop-blur-sm w-28 h-28 rounded-xl flex items-center justify-center border border-white/20 hover:border-white/40 transition-all transform hover:scale-110 hover:rotate-3">
                <img
                  src={chain.logo}
                  alt={`${chain.name} logo`}
                  className="w-14 h-14 object-contain"
                />
              </div>
              <p className="text-center mt-3 text-sm font-medium /80">
                {chain.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-8px) rotate(2deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes pulse-delay {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}

function Highlight({
  icon: Icon,
  heading,
  children,
}: {
  icon: any;
  heading: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="border-l border-t px-6 py-12">
      <div className="mb-4 flex flex-row items-center gap-2 /60">
        <Icon className="size-4" />
        <h2 className="text-sm font-medium">{heading}</h2>
      </div>
      <span className="/80">{children}</span>
    </div>
  );
}

function CallToAction() {
  return (
    <div className="py-16 text-center border-x border-t border-b">
      <h2 className="text-3xl font-medium  mb-2 tracking-tight">
        _{">"} Start dreaming...
      </h2>
      <p className="text-center /70 mb-6 max-w-2xl mx-auto">
        Build the future of autonomous agents
      </p>

      <div className="flex justify-center gap-6">
        <Link
          href="https://discord.gg/rt8ajxQvXh"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonStyles.primary,
            "flex items-center gap-2 px-4 py-2.5 text-sm font-semibold shadow-sm transition-colors rounded-md"
          )}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
          Join Discord
        </Link>
        <Link
          href="/docs"
          className={cn(
            buttonStyles.secondary,
            "flex items-center gap-2 px-4 py-2.5 text-sm font-semibold shadow-sm transition-colors rounded-md"
          )}
        >
          Start Building
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
