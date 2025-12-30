# ⚛️ React State & useState (Introduction)

## 📌 Definition

In React, **state** is a built-in object that allows components to store and manage data that can change over time. When state changes, React automatically **re-renders** the component to reflect the updated UI.

State is what makes React applications **interactive and dynamic**.

---

## ❓ Why Not Regular Variables?

Regular JavaScript variables:

* ❌ Do **not** trigger a re-render when changed
* ❌ Reset every time the component re-renders

Because of this, React provides **state** as a special kind of data.

---

## 🧠 What is State?

State is a component’s **memory** that:

* ✅ Triggers a re-render when updated
* ✅ Persists between renders

This solves two major problems:

1. UI not updating
2. Data resetting on every render

---

## 🔄 Props vs State

### Props

* Passed from parent to child
* Read-only (cannot be modified by the child)
* Like function arguments

### State

* Managed inside the component
* Can be changed by the component
* Like the component’s personal memory

---

## 🧩 When Do You Need State?

Ask yourself:

* Does the data change over time?
* Should the UI update when the data changes?
* Should the component remember this data between renders?

👉 If **yes** to any → you need **state**.

---

## 🪝 Hooks in React

React uses **Hooks** to add features like state to functional components.

The most important hook for state is:

### `useState`

---

## 🧪 Syntax

```jsx
const [stateValue, setStateValue] = useState(initialValue);
```

* `stateValue` → current state
* `setStateValue` → function to update state
* `initialValue` → starting value

---

## ❌ Incorrect Example (Using Normal Variable)

```jsx
const Count = () => {
  let count = 0;

  const handleClick = () => {
    count = count + 1;
    console.log(count);
  };

  return <button onClick={handleClick}>Count: {count}</button>;
};
```

### Problem:

* UI does **not** update
* Value resets on re-render

---

## ✅ Correct Example (Using State)

```jsx
import { useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return <button onClick={handleClick}>Count: {count}</button>;
};
```

### Why This Works:

* `setCount` updates state
* React re-renders the component
* UI updates correctly

---

## 🎯 Real-World Examples Using State

* 🛒 Shopping cart item count
* 📝 Form inputs
* 🌗 Dark / light mode toggle
* 📦 Modals open & close

---

## 📝 Summary

* State is React’s way to store dynamic data
* Changing state triggers UI updates
* Regular variables cannot update the UI
* `useState` is the primary hook for managing state
* Use state whenever data affects what the user sees

---

✅ **Without state → static UI**

🚀 **With state → real React applications**
