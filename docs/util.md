---
title: Util
---

# Util

## create()

```ts
create(tag: string): QueryResult;
```

Create an element, return `QueryResult`.

#### Example

```ts
const container = nashi.create('div').class('container');
nashi('body').firstChild(container);
```