# 🛒 useReducer – Complex State & Actions (Shopping Cart)

A practical guide to using **React's `useReducer` hook** for managing **complex state logic** with **multiple related values** and **action-driven updates**.

---

## 📘 Definition

`useReducer` is a React Hook used for **state management** when:

* State is **complex** (objects, arrays, derived values)
* Multiple state values change together
* State updates depend on **previous state**
* Logic needs to be **centralized and predictable**

It follows a pattern similar to Redux: **State → Action → Reducer → New State**.

---

## 🧠 Why useReducer instead of useState?

| useState            | useReducer        |
| ------------------- | ----------------- |
| Simple state        | Complex state     |
| Independent updates | Related updates   |
| Scattered logic     | Centralized logic |
| Few updates         | Many actions      |

---

## 🧩 Core Concepts

### 🔹 State

An object holding all related values:

```js
const initialState = {
  items: [],
  totalAmount: 0,
  totalItems: 0,
};
```

---

### 🔹 Actions

Actions describe **what happened**.

They are objects with:

* `type` → what action to perform
* `payload` → extra data

```js
{
  type: "ADD_ITEM",
  payload: { id: 1, name: "React Course", price: 49.99 }
}
```

---

### 🔹 Reducer

A **pure function** that decides how state changes:

```js
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return newState;
    default:
      return state;
  }
};
```

---

### 🔹 useReducer Syntax

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

* `state` → current state
* `dispatch` → sends actions to reducer

---

## 🛍️ Shopping Cart Example

### ✅ Features

* ➕ Add items
* ➖ Remove items
* 🔄 Update quantities
* 🧮 Auto-calculate totals
* 🧹 Clear cart

---

### 📦 Action Types

```js
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";
const CLEAR_CART = "CLEAR_CART";
```

---

### ⚙️ Reducer Logic (Simplified)

```js
case ADD_ITEM:
  return {
    ...state,
    items: updatedItems,
    totalAmount: calculateTotal(updatedItems),
    totalItems: calculateCount(updatedItems),
  };
```

All updates are **centralized** and **predictable**.

---

### 🧭 Dispatching Actions

```js
<button onClick={() => dispatch({ type: ADD_ITEM, payload: product })}>
  ➕ Add to Cart
</button>
```

---

## 🔄 How useReducer Works (Flow)

1️⃣ User clicks a button

2️⃣ `dispatch(action)` is called

3️⃣ Reducer receives `(state, action)`

4️⃣ Reducer returns new state

5️⃣ Component re-renders

---

## ✅ Best Practices

✔ Keep reducer **pure** (no side effects)

✔ Use **action objects** for clarity

✔ Group related state together

✔ Derive values (totals) inside reducer

✔ Use constants for action types

---

## 🆚 useState vs useReducer (Quick Summary)

| Feature        | useState   | useReducer  |
| -------------- | ---------- | ----------- |
| Complexity     | Low        | High        |
| Structure      | Simple     | Scalable    |
| Debugging      | Harder     | Easier      |
| Logic location | Spread out | Centralized |

---

## 🧾 Summary

✨ `useReducer` is ideal for **complex state management**

✨ Actions describe **what happened**, reducers decide **how state changes**

✨ Perfect for carts, forms, dashboards, and workflows

✨ Makes your React code **cleaner, predictable, and scalable**

---

🚀 **Tip:** If your component feels messy with `useState`, it's time for `useReducer`!
