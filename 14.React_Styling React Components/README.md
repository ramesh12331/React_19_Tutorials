# 🎨 Styling React Components (React 19)

This README explains **different ways to style React components** using approaches that work out of the box with **Vite + React 19**. We build a simple **Alert component** to demonstrate each technique.

---

## 📌 What is Styling in React?

Styling in React means applying **CSS styles** to components to control their appearance such as colors, spacing, layout, and responsiveness.

React supports multiple styling approaches, including:

* Inline styles
* Regular CSS files
* CSS Modules
* External libraries (Tailwind, styled-components, Emotion, etc.)

In this guide, we focus on **core, beginner-friendly approaches**.

---

## 🧩 Styling Approaches Covered

✔ Inline Styles
✔ External CSS Files
✔ CSS Modules

---

## 🧪 Example Use Case: Alert Component

We build an alert component that supports two states:

* ✅ Success alert
* ❌ Error alert

---

## ✨ 1. Inline Styles

### 📖 Definition

Inline styles in React are written as **JavaScript objects**, not strings. They are applied directly to elements using the `style` prop.

---

### 🧠 Syntax

```jsx
<div style={{ backgroundColor: "green", padding: "16px" }}>
```

* CSS properties use **camelCase**
* Values are usually strings

---

### 💻 Example

```jsx
import React from 'react'

const Alert = ({ children, type = "success" }) => {
  return (
    <div
      style={{
        backgroundColor: type === "success" ? "#10b981" : "#ef4444",
        color: "black",
        padding: "16px",
        borderRadius: "8px",
        marginBottom: "16px"
      }}
    >
      {children}
    </div>
  )
}

export default Alert
```

---

### ✅ Pros

* Simple and quick
* Dynamic styles based on props

### ❌ Cons

* No hover or media queries
* Hard to maintain for large apps

---

## 🎨 2. External CSS File

### 📖 Definition

Styles are written in a separate `.css` file and imported into the component.

---

### 🧠 Syntax

```css
.alert {
  padding: 16px;
  border-radius: 8px;
}

.success {
  background-color: #10b981;
}

.error {
  background-color: #ef4444;
}
```

---

### 💻 Example

**Alert.css**

```css
.alert {
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  color: black;
}

.success {
  background-color: #10b981;
}

.error {
  background-color: #ef4444;
}
```

**Alert.jsx**

```jsx
import "./Alert.css";

const Alert = ({ children, type = "success" }) => {
  return <div className={`alert ${type}`}>{children}</div>;
};

export default Alert;
```

---

### ✅ Pros

* Familiar CSS
* Clean separation of concerns

### ❌ Cons

* Class name conflicts
* Global scope

---

## 🧩 3. CSS Modules

### 📖 Definition

CSS Modules scope styles **locally** to the component, preventing naming collisions.

Files must be named `*.module.css`

---

### 🧠 Syntax

```jsx
import styles from './Alert.module.css';

<div className={styles.alert}>
```

---

### 💻 Example

**Alert.module.css**

```css
.alert {
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  color: black;
}

.success {
  background-color: #10b981;
}

.error {
  background-color: #ef4444;
}
```

**Alert.jsx**

```jsx
import styles from "./Alert.module.css";

export const Alert = ({ children, type = "success" }) => {
  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      {children}
    </div>
  );
};
```

---

### ✅ Pros

* No class name collisions
* Scales well
* Clean and maintainable

### ❌ Cons

* Slightly more syntax

---

## 🧠 When to Use What?

| Use Case             | Recommended Styling |
| -------------------- | ------------------- |
| Quick dynamic styles | Inline styles       |
| Small projects       | CSS files           |
| Medium–Large apps    | CSS Modules         |

---

## 📝 Summary

✅ React supports multiple styling techniques
✅ Inline styles use JavaScript objects
✅ External CSS files are simple but global
✅ CSS Modules provide scoped, maintainable styles
✅ Choose the approach based on project size and complexity

---

🚀 **Best Practice:** For production apps, prefer **CSS Modules** or a modern CSS framework.

Happy styling! 🎉
