---
title: Attribute
---

# Attribute

## text()

```ts
// Getter
text(): string;
// Setter
text(string: string): QueryResult;
```

Get or set element's `innerText`.

## class()

```ts
// Getter
class(): string;
// Setter
class(className: string): QueryResult;
```

Get or set element's `className`.

## id()

```ts
// Getter
id(): string;
// Setter
id(id: string): QueryResult;
```

Get or set element's `id`.

## addClass()

```ts
// Setter
addClass(className: string): QueryResult;
```

Add a className.

## removeClass()

```ts
// Setter
removeClass(className: string): QueryResult;
```

Remove a className.

## hasClass()

```ts
// Getter
hasClass(className: string): boolean;
```

Return if element has the className.

## toggleClass()

```ts
// Setter
toggleClass(className: string): QueryResult;
```

If element have the className, remove it. Otherwise, add it.

## attr()

```ts
// Getter
attr(key: string): string;
// Setter
attr(key: string, value: string): QueryResult;
```

Get or set element's `attribute`.

## prop()

```ts
// Getter
prop(key: string): string;
// Setter
prop(key: string, value: string): QueryResult;
```

Get or set element's `property`.

## html()

```ts
html(): string;
html(html: string): QueryResult;
```

Get or set element's `innerHTML`.
