# 🧩 React Components – Core Concepts

This README explains **React Components** in a simple and beginner‑friendly way. It covers **definitions, syntax, examples, naming conventions, parent–child relationships**, and ends with a clear **summary**.

---

## 📌 What Is a Component?

In React, a **component** is a reusable piece of the user interface.

👉 **Definition:**

> A React component is a **JavaScript function** that returns **HTML-like code (JSX)** describing what should appear on the screen.

Components allow you to **split the UI into independent, reusable parts**.

---

## 🌐 Components in a Standard Website

A typical website layout can be broken into components:

* Header
* Sidebar (Aside)
* Main Content
* Footer

In React, all these parts are represented as **components**, usually wrapped inside a **root component (`App`)**.

```
App (Root Component)
├── Header
├── Aside
├── Main
└── Footer
```

---

## ⚛️ Component in React (Syntax)

### Basic Syntax

```jsx
function ComponentName() {
  return (
    <h1>Hello World</h1>
  )
}

export default ComponentName
```

### Key Rules

* Component names **must start with a capital letter**
* Components return **JSX**, not plain HTML
* One component returns **one parent element**

---

## ✍️ JSX Explained

JSX stands for **JavaScript XML**.

* Looks like HTML
* Written inside JavaScript
* Converted to JavaScript by React

Example:

```jsx
const element = <h2>Welcome to React</h2>
```

---

## 🔠 PascalCase Naming Convention

React components use **PascalCase**.

### Definition

> PascalCase is a naming convention where **each word starts with a capital letter** and there are **no spaces or underscores**.

### Examples

| Convention | Example      |
| ---------- | ------------ |
| PascalCase | UserProfile  |
| camelCase  | userProfile  |
| snake_case | user_profile |

✅ **React Component Names:** `UserProfile`, `Header`, `WelcomeMessage`

---

## 👨‍👩‍👧 Parent and Child Components

Components can be **nested inside other components**.

### Example

```jsx
function Welcome() {
  return <h2>Welcome User</h2>
}

function App() {
  return (
    <div>
      <Welcome />
    </div>
  )
}

export default App
```

### Explanation

* `App` → Parent component
* `Welcome` → Child component
* Parent **renders** the child using `<Welcome />`

---

## 📦 Root Component (App)

* `App` is the **root component**
* It holds and renders all other components
* Connected to the DOM via `main.jsx`

```jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
```

---

## 🧠 Why Use Components?

* ♻️ Reusability
* 🧩 Better code organization
* 🛠 Easier maintenance
* 🚀 Faster development

---

## 📝 Simple Real‑World Example

```jsx
function Header() {
  return <header>My Website</header>
}

function Footer() {
  return <footer>© 2025</footer>
}

function App() {
  return (
    <div>
      <Header />
      <main>Main Content</main>
      <Footer />
    </div>
  )
}

export default App
```

---

## ✅ Components Summary

* Components describe **parts of the UI**
* Components are **JavaScript functions**
* They return **JSX (HTML-like syntax)**
* Components must use **PascalCase**
* Components can be **nested** (parent → child)
* `App` is the **root component**

---

🎯 **Mastering components is the foundation of mastering React.**

Once you understand components, learning **props, state, hooks, and routing** becomes much easier 🚀
