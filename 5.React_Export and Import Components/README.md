# 📦 React Components: Import & Export Guide

A **beginner‑friendly guide** explaining **React component file naming**, **JavaScript ES6 modules**, **import/export syntax**, and **best practices**, with clear and practical examples.

---

## 📁 Component Filename Conventions

Consistent file naming improves **readability**, **maintainability**, and **team collaboration**.

### ✅ Recommended Conventions

| Convention     | Description                   | Example            |
| -------------- | ----------------------------- | ------------------ |
| **PascalCase** | Standard for React components | `UserProfile.jsx`  |
| kebab-case     | Sometimes used for utilities  | `user-profile.jsx` |

### ⭐ Best Practice

> Always use **PascalCase** for React component filenames.

---

## 📚 JavaScript Modules in React

React uses **ES6 Modules** to organize and reuse code across files.

### 🔹 Two Simple Steps

1. **Export** the component from its file
2. **Import** the component where you want to use it

---

## 🔑 Export Types in React

There are **two main types of exports** used in React projects.

---

### 1️⃣ Default Export

Used when a file exports **one main value** (most common for components).

#### ✅ Syntax

```jsx
export default ComponentName;
```

#### 📌 Example: `Button.jsx`

```jsx
const Button = () => {
  return <button>Click me</button>;
};

export default Button;
```

#### 📥 Importing Default Export

```jsx
import Button from './Button';
```

✔ You can rename default imports if needed.

---

### 2️⃣ Named Export

Used when a file exports **multiple values**.

#### ✅ Syntax

```jsx
export const ComponentName = () => { };
```

#### 📌 Example: `Welcome.jsx`

```jsx
export const Welcome = () => {
  return <h1>Welcome, Vishwas!</h1>;
};
```

#### 📥 Importing Named Export

```jsx
import { Welcome } from './Welcome';
```

⚠️ **Important Rules:**

* Named imports **must match the export name exactly**
* Curly braces `{ }` are required

---

## 🧩 Using Components in `App.jsx`

```jsx
import React from 'react';
import './App.css';
import { Welcome } from './Welcome';
import Button from './Button';

const App = () => {
  return (
    <div>
      <h1>Code Evolution React Course</h1>
      <Welcome />
      <Button />
    </div>
  );
};

export default App;
```

---

## 🗂️ Project Structure Example

```
src/
│── App.jsx
│── Button.jsx
│── Welcome.jsx
│── App.css
```

---

## 📌 Why Use Import & Export?

✔ Keeps code **modular**
✔ Improves **readability & maintainability**
✔ Makes components **reusable**
✔ Helps applications **scale easily**

---

## 📝 Summary

* Use **PascalCase** for React component filenames
* **Default Export** → One main export per file
* **Named Export** → Multiple exports per file
* Match **export & import syntax correctly**
* Modular structure keeps React apps **clean, scalable, and reusable**

---

🎯 **Understanding import & export is essential for building scalable React applications.**

Once mastered, working with **props, hooks, and shared utilities** becomes effortless 🚀
