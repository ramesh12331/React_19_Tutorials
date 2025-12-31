# ⚛️ React Hooks: `useState` vs `useReducer`

> A beginner-friendly guide explaining **definitions**, **syntax**, **examples**, and **when to use** `useState` and `useReducer` in React.

---

## 📌 Table of Contents

* 🔍 Definitions
* ✍️ Syntax
* 🧩 Examples
* ⚖️ Comparison
* 🧠 Decision Guide
* 📝 Summary

---

## 🔍 Definitions

### 🟢 `useState`

`useState` is a React Hook used to manage **simple, local state** inside a component.

* Best for primitive values (numbers, strings, booleans)
* Minimal setup
* Ideal for quick and straightforward state updates

---

### 🔵 `useReducer`

`useReducer` is a React Hook for managing **complex state logic** using a reducer function.

* Inspired by Redux
* Centralizes state updates
* Ideal for complex objects, multiple related states, or branching logic

---

## ✍️ Syntax

### 🟢 `useState` Syntax

```js
const [state, setState] = useState(initialValue);
```

---

### 🔵 `useReducer` Syntax

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

With lazy initialization:

```js
const [state, dispatch] = useReducer(reducer, initialState, init);
```

---

## 🧩 Examples

### 🟢 `useState` Example

```js
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>➕ Increment</button>
      <button onClick={() => setCount(count - 1)}>➖ Decrement</button>
    </div>
  );
};
```

---

### 🔵 `useReducer` Example

```js
import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch("increment")}>➕</button>
      <button onClick={() => dispatch("decrement")}>➖</button>
      <button onClick={() => dispatch("reset")}>🔄 Reset</button>
    </div>
  );
};
```

---

## ⚖️ Comparison

| Feature     | useState 🟢             | useReducer 🔵             |
| ----------- | ----------------------- | ------------------------- |
| Setup       | Very simple             | More boilerplate          |
| Readability | Best for simple updates | Best for complex logic    |
| Debugging   | Harder as logic grows   | Easier (single reducer)   |
| Testing     | Tied to component       | Reducer is testable alone |
| Best For    | 1–3 state values        | 4+ related states         |

---

## 🧠 Decision Guide

### ✅ Choose `useState` when:

* State is simple and independent
* Updates are straightforward
* You want the simplest solution

### ✅ Choose `useReducer` when:

* State logic is complex
* Multiple values update together
* Debugging is becoming difficult
* You want predictable state transitions

> 💡 Tip: It’s **perfectly normal** to start with `useState` and refactor to `useReducer` later.

---

## 📝 Summary

* 🔹 Both `useState` and `useReducer` manage state and trigger re-renders
* 🔹 `useState` is simpler and faster to write
* 🔹 `useReducer` scales better for complex logic
* 🔹 `useState` is built **on top of** `useReducer`
* 🔹 Start simple, add complexity only when needed

✨ **Goal:** Write code that is easy to understand, maintain, debug, and test.

Happy Coding! 🚀
