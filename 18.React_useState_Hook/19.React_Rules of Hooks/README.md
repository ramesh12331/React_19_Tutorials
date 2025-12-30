# ⚛️ React Rules of Hooks (React 19)

## 📌 Definition

The **Rules of Hooks** are a set of constraints that ensure React Hooks work **predictably and correctly**. Hooks rely on the **order in which they are called**, so React enforces rules to maintain a consistent hook order across renders.

Breaking these rules can lead to **bugs, broken state, or runtime errors**.

---

## 🧠 Why Rules of Hooks Exist

React does **not track hooks by name**.
Instead, it tracks hooks by their **call order**.

If the order changes between renders, React can no longer match state correctly.

> 🧠 Hooks are like items in a list — order must never change.

---

## 🥇 Two Golden Rules of Hooks

### ✅ Rule 1: Only Call Hooks at the Top Level

Hooks must be called **directly inside the component body**, before any:

* ❌ loops
* ❌ conditions
* ❌ nested functions
* ❌ try/catch blocks
* ❌ early returns

---

### ✅ Rule 2: Only Call Hooks from React Functions

Hooks can be used **only** in:

* ✅ React functional components
* ✅ Custom hooks

❌ Not allowed in:

* Regular JavaScript functions
* Event handlers
* Utility/helper functions

---

## 🧩 Correct Syntax

```jsx
import { useState } from 'react';

const Component = () => {
  const [value, setValue] = useState(0);

  return <div>{value}</div>;
};
```

✔️ Hook at top level
✔️ Inside React component

---

## ❌ Common Mistakes (With Examples)

### ❌ Mistake 1: Hooks Inside Conditions

```jsx
const UserDashboard = ({ isPremium }) => {
  if (isPremium) {
    const [credits, setCredits] = useState(100); // ❌ WRONG
  }

  return <div>Dashboard</div>;
};
```

### ✅ Correct Way

```jsx
const UserDashboard = ({ isPremium }) => {
  const [credits, setCredits] = useState(100);

  if (!isPremium) {
    return <div>Upgrade to premium to see credits</div>;
  }

  return (
    <div>
      <p>You have {credits} credits</p>
      <button onClick={() => setCredits(0)}>Spend All Credits</button>
    </div>
  );
};
```

---

### ❌ Mistake 2: Hooks Inside Loops

```jsx
const ProductList = ({ products }) => {
  for (let product of products) {
    const [qty, setQty] = useState(0); // ❌ WRONG
  }
};
```

---

### ❌ Mistake 3: Hooks After Early Return

```jsx
const UserProfile = ({ userId }) => {
  if (!userId) {
    return <div>Please log in</div>;
  }

  const [profile, setProfile] = useState(null); // ❌ WRONG
};
```

---

### ❌ Mistake 4: Hooks Inside Event Handlers

```jsx
const TodoList = () => {
  const handleAddTodo = () => {
    const [todo, setTodo] = useState(''); // ❌ WRONG
  };

  return <button onClick={handleAddTodo}>Add Todo</button>;
};
```

---

### ❌ Mistake 5: Hooks in Regular JS Functions

```jsx
const calculateTotal = (items) => {
  const [tax, setTax] = useState(0.08); // ❌ WRONG
  return items.reduce((sum, item) => sum + item.price, 0);
};
```

---

## 🧠 Why Order Matters (Simple Explanation)

React internally stores hooks like this:

```
useState → Slot 1
useState → Slot 2
useState → Slot 3
```

If a hook is skipped or added conditionally:

* Slots shift
* State maps incorrectly
* Bugs appear

---

## 📝 Summary

* Hooks depend on **call order**, not names
* Always call hooks at the **top level**
* Never use hooks inside conditions, loops, or handlers
* Hooks work only in React components or custom hooks
* ESLint helps catch most hook rule violations

---

✅ **Follow the rules → predictable state**

❌ **Break the rules → broken React app**
