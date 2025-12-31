# React Context with State (useContext & use API)

## 📘 Definition

React **Context** provides a way to share data (state) across the component tree **without prop drilling**. It is commonly used for global data such as authentication info, themes, language, or user preferences.

When Context is combined with **state**, components can both **read and update shared data** from anywhere in the app.

React 19 also introduces the **use API**, a more flexible alternative to `useContext`, while `useContext` remains widely used and supported.

---

## ❓ Why Context?

### The Prop Drilling Problem

Prop drilling happens when data is passed through many intermediate components that do not need it, just to reach a deeply nested component.

### Context Solves This By:

* Sharing data globally
* Reducing coupling between components
* Improving maintainability and readability

---

## 🧩 Core Concepts

* **Context**: Holds shared data
* **Provider**: Supplies data to the component tree
* **Consumer**: Reads and updates data (`useContext` or `use`)

---

## 🧠 Syntax Overview

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

### 2️⃣ Context Provider with State

```js
import { useState } from "react";
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

### 3️⃣ Wrap Application

```js
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

### 4️⃣ Consume Context with `useContext`

```js
import { useContext } from "react";
import { UserContext } from "./UserContext";

const Avatar = ({ isLoading = false }) => {
  if (isLoading) return <div>Loading user data...</div>;

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
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
};

export default Avatar;
```

---

## 🔐 Rules of Hooks (Important)

* Hooks must be called at the **top level**
* Never call hooks inside conditions, loops, or early returns
* Hooks must run in the same order on every render

---

## 🆕 use API (React 19)

### What is `use`?

* A flexible alternative to `useContext`
* Reads context values **without hook restrictions**
* Useful for conditional logic and server components

> `useContext` is NOT deprecated and will continue to be widely used.

---

## 📝 Summary

* Context solves the **prop drilling problem**
* Combining Context with State allows **global read + update**
* `useContext` is ideal for most client-side React apps
* React 19 introduces `use` as a powerful alternative
* Start simple and scale complexity only when needed

### ✅ Best Use Cases

* Theme switching
* Authentication & user data
* Language / localization
* Global UI preferences

---

✨ **Goal:** Write code that is easy to understand, maintain, and debug.
Sometimes that’s `useContext`, sometimes it’s the `use` API.
