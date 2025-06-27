---
title: "VectorMemory"
---

[**@daydreamsai/core**](./api-reference.md)

***

[@daydreamsai/core](./api-reference.md) / VectorMemory

# Interface: VectorMemory

Defined in: [packages/core/src/memory/types.ts:445](https://github.com/dojoengine/daydreams/blob/bbf75946e0d6d99fbdde4cebb2f8a4e8926724f1/packages/core/src/memory/types.ts#L445)

Vector Memory interface

## Methods

### delete()

> **delete**(`ids`): `Promise`\<`void`\>

Defined in: [packages/core/src/memory/types.ts:448](https://github.com/dojoengine/daydreams/blob/bbf75946e0d6d99fbdde4cebb2f8a4e8926724f1/packages/core/src/memory/types.ts#L448)

#### Parameters

##### ids

`string`[]

#### Returns

`Promise`\<`void`\>

***

### index()

> **index**(`documents`): `Promise`\<`void`\>

Defined in: [packages/core/src/memory/types.ts:446](https://github.com/dojoengine/daydreams/blob/bbf75946e0d6d99fbdde4cebb2f8a4e8926724f1/packages/core/src/memory/types.ts#L446)

#### Parameters

##### documents

[`VectorDocument`](./VectorDocument.md)[]

#### Returns

`Promise`\<`void`\>

***

### search()

> **search**(`query`): `Promise`\<[`VectorResult`](./VectorResult.md)[]\>

Defined in: [packages/core/src/memory/types.ts:447](https://github.com/dojoengine/daydreams/blob/bbf75946e0d6d99fbdde4cebb2f8a4e8926724f1/packages/core/src/memory/types.ts#L447)

#### Parameters

##### query

[`VectorQuery`](./VectorQuery.md)

#### Returns

`Promise`\<[`VectorResult`](./VectorResult.md)[]\>
