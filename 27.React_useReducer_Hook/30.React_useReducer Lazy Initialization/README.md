# ⚛️ useReducer Lazy Initialization (React)

> A practical guide to understanding **useReducer with Lazy Initialization** in React, including **definition, syntax, examples, and summary**.

---

## 📌 What is `useReducer`?

`useReducer` is a **React Hook** used for managing **complex state logic** in a predictable and centralized way. It is an alternative to `useState` and is especially useful when:

* State depends on **previous state**
* Multiple **actions** modify the same state
* State logic becomes **hard to manage** with `useState`

📦 Think of it like Redux **inside a component**, without external libraries.

---

## 🧠 What is Lazy Initialization?

Lazy initialization allows you to **delay expensive state initialization logic** until the component mounts.

Instead of computing the initial state on **every render**, React runs the initializer **only once**.

### ✅ Why use it?

* 🏎️ Improves performance
* 📂 Ideal for reading from `localStorage`
* 🧮 Useful for expensive calculations

---

## ✍️ Syntax

```js
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

### Parameters

| Parameter    | Description                             |
| ------------ | --------------------------------------- |
| `reducer`    | Function that updates state             |
| `initialArg` | Base initial value                      |
| `init`       | 🔹 Lazy initializer function (optional) |

---

## ⚙️ How Lazy Initialization Works

🪜 Step-by-step flow:

1. React calls `init(initialArg)` **once**
2. The returned value becomes the **initial state**
3. `init` is **NOT called again** on re-renders

---

## 🧪 Example: Counter with Lazy Initialization

### 📁 Features

* ➕ Increment
* ➖ Decrement
* 🔄 Reset
* 💾 Persist state using `localStorage`

### 🧩 Code Example

```js
import React, { useReducer } from "react";

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

const init = (initialValue) => {
  const saved = localStorage.getItem("count");
  return saved !== null ? parseInt(saved, 10) : initialValue;
};

const CounterWithInit = () => {
  const [count, dispatch] = useReducer(reducer, initialState, init);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch("increment")}>➕ Increment</button>
      <button onClick={() => dispatch("decrement")}>➖ Decrement</button>
      <button onClick={() => dispatch("reset")}>🔄 Reset</button>
    </div>
  );
};

export default CounterWithInit;
```

---

## 📦 When Should You Use Lazy Initialization?

✔️ Use it when:

* 🔁 Initial state calculation is expensive
* 💾 You read initial state from `localStorage` or API
* 📊 Large datasets or computations are involved

❌ Avoid it when:

* Initial state is a **simple value**
* No performance concerns

---

## 🧠 Comparison: `useState` vs `useReducer`

| Feature             | useState   | useReducer |
| ------------------- | ---------- | ---------- |
| Simple state        | ✅          | ❌          |
| Complex logic       | ❌          | ✅          |
| Multiple actions    | ❌          | ✅          |
| Lazy initialization | ⚠️ Limited | ✅          |

---

## 📝 Summary

✨ Key takeaways:

* 🧠 `useReducer` centralizes state logic
* 🚀 Lazy initialization runs **only once**
* 📦 Ideal for performance-sensitive apps
* 🔄 Keeps components clean and predictable

> 💡 Use **lazy initialization** when your initial state is expensive or external — otherwise keep it simple!

---

Happy coding! ⚛️🚀
