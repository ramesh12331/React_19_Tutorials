# ⚛️ React useState & useReducer – Complete Guide

A practical and beginner‑friendly guide covering **useState**, **useReducer**, and advanced patterns like **complex reducers**, **lazy initialization**, and **implementing useState with useReducer**.

---

## 📌 Table of Contents

1. useState Overview
2. useState with Objects
3. useState with Arrays
4. useReducer (Simple State & Action)
5. useReducer (Complex State & Actions)
6. useReducer Lazy Initialization
7. Implementing useState with useReducer
8. When to use useState vs useReducer
9. Summary

---

## 🔹 1. useState – Definition

`useState` is a React Hook that allows functional components to manage **local state**.

### ✅ Key Points

* Returns a **state value** and a **setter function**
* Updating state triggers a re‑render
* Best for **simple and independent state values**

### 🧠 Syntax

```js
const [state, setState] = useState(initialValue);
```

---

## 🔹 2. useState with Objects

When using objects, React **replaces** the entire object — so always spread the previous state.

### 🧠 Example

```js
const [user, setUser] = useState({
  name: "Bruce Wayne",
  age: 30,
  address: { city: "Gotham" }
});

setUser({
  ...user,
  age: user.age + 1,
  address: {
    ...user.address,
    city: "Metropolis"
  }
});
```

### ⚠️ Rules

* ❌ Never mutate state directly
* ✅ Always use the setter function
* ✅ Spread both outer & nested objects

---

## 🔹 3. useState with Arrays

Arrays must also be treated as **immutable**.

### 🧠 Common Operations

#### ➕ Add Item

```js
setItems([...items, newItem]);
```

#### ❌ Remove Item

```js
setItems(items.filter(item => item.id !== id));
```

#### 🔁 Update Item

```js
setItems(items.map(item =>
  item.id === id ? { ...item, done: !item.done } : item
));
```

### ⚠️ Rules

* Use `map`, `filter`, `concat`
* Avoid `push`, `splice`

---

## 🔹 4. useReducer – Simple State & Action

`useReducer` is an alternative to `useState` for **more predictable state updates**.

### 🧠 Definition

* State updates are handled by a **reducer function**
* Actions describe **what happened**
* Reducer decides **how state changes**

### 🧠 Syntax

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

### 🧠 Example (Counter)

```js
const reducer = (state, action) => {
  switch (action) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'reset': return 0;
    default: return state;
  }
};
```

---

## 🔹 5. useReducer – Complex State & Actions

Ideal when:

* State has **multiple related values**
* Actions carry **extra data (payload)**

### 🧠 Action Structure

```js
{
  type: 'ADD_ITEM',
  payload: { id, name, price }
}
```

### 🛒 Shopping Cart Features

* Add / Remove items
* Update quantities
* Calculate totals
* Clear cart

### ✅ Benefits

* Centralized logic
* Predictable updates
* Scalable architecture

---

## 🔹 6. useReducer Lazy Initialization

Used for **expensive initial state calculations**.

### 🧠 Syntax

```js
useReducer(reducer, initialState, init);
```

### 🧠 Example

```js
const init = (initialValue) => {
  const saved = localStorage.getItem('count');
  return saved ? parseInt(saved) : initialValue;
};
```

### ✅ Benefits

* Runs only **once** on mount
* Great for localStorage / heavy computation

---

## 🔹 7. Implementing useState with useReducer

`useState` is built **on top of useReducer**.

### 🧠 Custom Hook

```js
const useStateCustom = (initialValue) => {
  const reducer = (state, action) =>
    typeof action === 'function' ? action(state) : action;

  const [state, dispatch] = useReducer(reducer, initialValue);
  return [state, dispatch];
};
```

### 🧠 Supports

* Direct values
* Functional updates
* Lazy initialization

---

## 🔹 8. useState vs useReducer

| Feature             | useState | useReducer |
| ------------------- | -------- | ---------- |
| Simple state        | ✅        | ❌          |
| Complex logic       | ❌        | ✅          |
| Centralized updates | ❌        | ✅          |
| Predictability      | ❌        | ✅          |
| Scalability         | ❌        | ✅          |

---

## 🧾 Final Summary

✔ `useState` is perfect for **simple, isolated state**

✔ `useReducer` shines when:

* State logic is complex
* Multiple actions affect the same state
* State values are related

✔ Lazy initialization improves performance

✔ `useState` is just a convenience wrapper over `useReducer`

🚀 Mastering both gives you **full control over React state management**.

---

⭐ If this helped you, give the repo a star and keep learning React!
