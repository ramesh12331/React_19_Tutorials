# 🔁 useReducer – Simple State & Action

## 📘 Definition

`useReducer` is a React Hook used for **state management** when state logic becomes complex or when the next state depends on the previous state. It follows the **reducer pattern**, similar to `Array.reduce()`.

---

## 🧠 Why use useReducer?

* 🧩 Better for **complex state transitions**
* 🧪 Makes state logic **predictable & testable**
* 🔄 Centralizes update logic in one place (the reducer)
* 🆚 Great alternative to `useState` for counters, forms, toggles, workflows

---

## 🧩 Core Concepts

### 📦 State

The current data/value managed by the reducer.

### 🎬 Action

An instruction that tells **what happened** (e.g. increment, decrement).

### 🧠 Reducer

A pure function that decides **how state changes** based on the action.

### 🚀 Dispatch

A function used to **send actions** to the reducer.

---

## 🧪 Syntax

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

---

## 🧠 Reducer Function Syntax

```js
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};
```

---

## 🧩 Example: Counter with useReducer

```jsx
import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const CounterWithReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>🔢 Count: {count}</p>
      <button onClick={() => dispatch('increment')}>➕ Increment</button>
      <button onClick={() => dispatch('decrement')}>➖ Decrement</button>
      <button onClick={() => dispatch('reset')}>🔄 Reset</button>
    </div>
  );
};

export default CounterWithReducer;
```

---

## ⚙️ How useReducer Works (Flow)

1️⃣ User clicks a button
2️⃣ `dispatch(action)` is called
3️⃣ Reducer receives `(state, action)`
4️⃣ Reducer returns **new state**
5️⃣ Component re-renders with updated state

---

## 🆚 useState vs useReducer

| Feature           | useState | useReducer  |
| ----------------- | -------- | ----------- |
| Simple state      | ✅        | ⚠️ Overkill |
| Complex logic     | ❌        | ✅           |
| Multiple actions  | ❌        | ✅           |
| Centralized logic | ❌        | ✅           |

---

## 📝 Summary

✅ `useReducer` is ideal for managing **state with multiple transitions**

✅ It uses **actions** to describe what happened

✅ The **reducer function** controls how state updates

✅ `dispatch` is used to trigger state changes

🎯 Use `useReducer` when:

* State logic is complex
* Multiple related state updates exist
* You want predictable, scalable state management

---

✨ Happy Coding with React Hooks!
