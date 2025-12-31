# React Context with State

A simple guide to **React Context with State** explaining **definition, syntax, example, and summary**. This pattern helps manage **global state** and avoids **prop drilling** in React applications.

---

## 📘 Definition

**React Context** allows you to share data (state) across the component tree without passing props manually at every level.

When combined with **useState**, Context can:

* Store global data (user, theme, auth info)
* Allow deeply nested components to **read and update** that data
* Solve the **prop drilling problem**

---

## 🧠 When to Use Context with State

Use Context with State when:

* Many components need the same data
* Updates come from deeply nested components
* Props are being passed through multiple levels
* Data affects the whole app (theme, user, language)

Avoid Context for:

* Frequently changing, performance‑critical data
* Simple one‑component state

---

## 🧩 Basic Syntax

### 1️⃣ Create Context

```js
import { createContext } from "react";

export const UserContext = createContext({
  user: {
    name: "Guest",
    role: "visitor",
    theme: "light",
  },
  setUser: () => {},
});
```

---

### 2️⃣ Create Context Provider (with State)

```js
import React, { useState } from "react";
import { UserContext } from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Bruce Wayne",
    role: "admin",
    theme: "dark",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
```

---

### 3️⃣ Wrap App with Provider

```js
import Header from "./Header";
import UserContextProvider from "./UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>Dashboard</h1>
      <Header />
    </UserContextProvider>
  );
}

export default App;
```

---

### 4️⃣ Consume & Update Context (useContext)

```js
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Avatar = () => {
  const { user, setUser } = useContext(UserContext);

  const toggleTheme = () => {
    setUser({
      ...user,
      theme: user.theme === "dark" ? "light" : "dark",
    });
  };

  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <p>Current theme: {user.theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Avatar;
```

---

## 🚫 Problem Solved: Prop Drilling

**Prop drilling** happens when data is passed through components that don’t need it, just to reach deeper components.

Context eliminates this by making data **globally accessible** where needed.

---

## ⚖️ Context vs Props

| Feature      | Props          | Context |
| ------------ | -------------- | ------- |
| Data Flow    | Parent → Child | Global  |
| Boilerplate  | Low            | Medium  |
| Deep Access  | Hard           | Easy    |
| Global State | ❌              | ✅       |

---

## ✅ Best Practices

* Create **separate contexts** for different concerns
* Keep context values minimal
* Memoize values if performance becomes an issue
* Combine with `useReducer` for complex state

---

## 📝 Summary

* Context solves **prop drilling**
* `createContext()` creates shared state container
* Provider supplies data to all children
* `useContext()` consumes and updates data
* Context + State enables **global, reactive state management**

📌 Start simple with `useState`, switch to Context when data needs to be shared widely.

---

⭐ **Happy Coding with React!**
