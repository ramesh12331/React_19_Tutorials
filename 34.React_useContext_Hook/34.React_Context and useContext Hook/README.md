# 🧩 React Context API – Avoiding Prop Drilling

## 📌 Definition

**Prop Drilling** happens when data is passed from a parent component to deeply nested child components through multiple intermediate components that do not need the data themselves.

React provides the **Context API** to solve this problem by allowing data to be shared globally across the component tree without passing props manually at every level.

---

## 🚨 The Problem: Prop Drilling

When your application grows:

* You pass the same props through many components
* Components become tightly coupled
* Maintenance becomes harder
* Performance can degrade due to unnecessary re-renders

---

## ✅ The Solution: Context API

The **Context API** lets you:

* Create shared state (context)
* Provide it at a high level
* Consume it anywhere in the tree

No more unnecessary prop passing 🎉

---

## 🧠 Core Concepts

1. **createContext** – Creates a context object
2. **Provider** – Supplies the data
3. **useContext** – Consumes the data

---

## 🧾 Syntax

### 1️⃣ Create Context

```js
import { createContext } from "react";

export const UserContext = createContext({
  name: "Guest",
  role: "visitor",
  theme: "light",
});
```

---

### 2️⃣ Provide Context (App Component)

```js
import Header from './Header'
import { UserContext } from './UserContext'

function App() {
  const user = {
    name: "Bruce Wayne",
    role: "admin",
    theme: "dark",
  }

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>Dashboard</h1>
        <Header />
      </div>
    </UserContext.Provider>
  )
}

export default App;
```

---

### 3️⃣ Consume Context (Avatar Component)

```js
import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const Avatar = () => {
  const user = useContext(UserContext)

  return (
    <div>
      <h4>Avatar</h4>
      <h3>{user.name}</h3>
    </div>
  )
}

export default Avatar;
```

---

## 🌳 Component Tree Example

```
App (UserContext.Provider)
 └── Header
     └── Avatar (useContext)
```

✅ `Avatar` receives user data **without props**

---

## ⚖️ Prop Drilling vs Context API

| Feature          | Prop Drilling   | Context API |
| ---------------- | --------------- | ----------- |
| Code readability | ❌ Poor          | ✅ Clean     |
| Scalability      | ❌ Hard          | ✅ Easy      |
| Maintenance      | ❌ Difficult     | ✅ Simple    |
| Performance      | ❌ Extra renders | ✅ Optimized |

---

## 🛠 Best Practices

* Use Context for **global data** (user, theme, auth)
* Avoid using Context for **frequently changing local state**
* Split contexts (UserContext, ThemeContext)
* Combine with `useReducer` for complex state logic

---

## 📝 Summary

* Prop drilling occurs when props pass through unnecessary components
* Context API solves this by sharing data globally
* `createContext`, `Provider`, and `useContext` are the key tools
* Context makes React apps cleaner, scalable, and easier to maintain

✨ Use Context when your component tree starts getting deep
