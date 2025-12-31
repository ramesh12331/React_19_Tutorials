# 🧠 React `useReducer` Hook – State Management

---

## 📘 Definition

`useReducer` is a React Hook used for **managing complex state logic**. It is an alternative to `useState` and is especially useful when:

* State has multiple related values
* Updates depend on previous state
* State transitions should be predictable and centralized

It is inspired by JavaScript’s `array.reduce()` method.

---

## 🔍 From `useState` to `useReducer`

So far with `useState`, we’ve managed:

* 🔢 Numbers
* 🔤 Strings
* 🔘 Booleans
* 🧱 Objects
* 📚 Arrays

When state logic grows complex, React provides **another hook** 👉 `useReducer`.

---

## 🧩 Core Concepts

* 🧮 **Reducer** – A function that decides how state changes
* 📨 **Action** – An object describing *what happened*
* 🚀 **Dispatch** – Sends actions to the reducer
* 🗂️ **State** – The current value managed by the reducer

---

## 🧠 Understanding `array.reduce()`

```js
const array = [1, 2, 3, 4];

const sum = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
```

### How it works:

* Start with `0`
* Add each value step by step
* End with **one final value**

➡️ `reduce` takes **many values** and returns **one value**

---

## 🔄 `array.reduce()` vs `useReducer()`

### Similarity

Both use a **reducer function** to calculate the next value.

```js
array.reduce(reducer, initialValue);
useReducer(reducer, initialState);
```

### Differences

| array.reduce           | useReducer                  |
| ---------------------- | --------------------------- |
| Returns a single value | Returns `[state, dispatch]` |
| Used for arrays        | Used for state management   |
| Runs immediately       | Runs on dispatched actions  |

---

## ⚙️ `useReducer` Syntax

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

### Reducer Function

```js
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};
```

---

## 🧪 Example: Counter with `useReducer`

```jsx
import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
};

export default Counter;
```

---

## 🧭 Data Flow

```
User Action → dispatch(action)
           → reducer(state, action)
           → newState
           → component re-renders
```

---

## ✅ When to Use `useReducer`

* Complex state logic 🧩
* Multiple related state values 📦
* Many state transitions 🔄
* Clear and predictable updates 🧠

---

## ⚠️ When `useState` Is Enough

* Simple values
* Independent state updates
* Minimal logic

---

## 🧾 Summary

* `useReducer` is a powerful hook for **complex state management**
* Inspired by `array.reduce()`
* Centralizes state logic in a reducer function
* Uses **actions** and **dispatch** for predictable updates
* Ideal stepping stone before Context API or Redux

🚀 Mastering `useReducer` makes large React apps easier to scale and maintain.
