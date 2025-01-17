---
title: 事件
---

# 事件

你可以使用 `nashi('p').{事件名}` 来设置监听事件，就像这样：

```ts
nashi('p').click(() => console.log('Nashi is great!'));
```

或者你可以这样触发元素的事件：

```ts
nashi('p').click(); // Nashi is great!
```

这是支持的所有事件：

| blur      | focus     | focusin    | focusout    |
| --------- | --------- | ---------- | ----------- |
| hover     | change    | click      | contextmenu |
| dblclick  | error     | keydown    | keypress    |
| keyup     | mousedown | mouseenter | mouseleave  |
| mousemove | mouseout  | mouseover  | mouseup     |
| resize    | scroll    | select     | submit      |

或者你可以调用 `event()` or `on()` (on 是 event 的别名):

```ts
nashi('p').event('click', () => console.log('Nashi is great!'));
nashi('p').event('click'); // Nashi is great!
```

或者你可以用 `trigger()` 来触发事件：

```ts
nashi('p').trigger('click');
```

你可以使用 `removeEvent()` 来移除事件：

```ts
let count = 0;
const handler = count++;
const np = nashi('p');
np.click(handler);
np.click(); // count = 1
np.removeEvent('click', handler);
np.click(); // count = 1
```
