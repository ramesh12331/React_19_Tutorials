# 📘 JSX (JavaScript XML) – Complete Guide

This README explains **JSX**, its **definition**, **syntax**, **rules**, **examples**, and a **final summary** based on React fundamentals.

---

## 📌 What is JSX?

**JSX (JavaScript XML)** is a syntax extension for JavaScript used in **React**. It allows you to write UI elements using a syntax that looks similar to HTML, but it is actually JavaScript under the hood.

JSX makes React code:

* More readable
* Easier to write
* Easier to visualize UI structure

> ⚠️ JSX is **not HTML**. It is converted to JavaScript using `React.createElement()`.

---

## 🧠 Why JSX Has Rules

Because JSX is JavaScript (not HTML), it must follow JavaScript rules. This is why JSX behaves slightly differently than traditional HTML.

---

## 🧾 Basic JSX Syntax

```jsx
const element = <h1>Hello, World!</h1>;
```

Embedding JavaScript expressions:

```jsx
const name = "Peter";
<h1>Hello, {name}</h1>
```

---

## 📜 Rules of JSX

### ✅ Rule 1: Components Must Return a Single Root Element

You cannot return multiple JSX elements side by side.

❌ Invalid:

```jsx
return (
  <h1>Hello</h1>
  <p>World</p>
);
```

✅ Valid:

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);
```

---

### ✅ Rule 2: Every Tag Must Be Properly Closed

Even self-closing HTML tags must be closed.

❌ Invalid:

```jsx
<input type="text">
```

✅ Valid:

```jsx
<input type="text" />
```

---

### ✅ Rule 3: Attribute Names Must Be Written in camelCase

Some HTML attributes conflict with JavaScript keywords.

| HTML     | JSX       |
| -------- | --------- |
| class    | className |
| for      | htmlFor   |
| tabindex | tabIndex  |

Example:

```jsx
<label htmlFor="email">Email</label>
<input className="input" tabIndex={1} />
```

---

### ✅ Rule 4: Use Curly Braces `{}` to Embed JavaScript Expressions

You can embed any JavaScript expression inside JSX using `{}`.

```jsx
const age = 25;
<p>Age: {age}</p>
<p>Status: {age > 18 ? "Adult" : "Minor"}</p>
```

---

## 🧩 JSX Examples from Components

### 👤 Candidate Profile Component

```jsx
const CandidateProfile = () => {
  const name = "Peter Parker";
  const role = "Web Developer";
  const yearOfExperience = 5;
  const isAvailable = true;

  return (
    <div>
      <h2>{name}</h2>
      <p>{role} with {yearOfExperience} years of experience</p>
      <p>Started in {2025 - yearOfExperience}</p>
      <p>Status: {isAvailable ? "Available for hire" : "Not Available"}</p>
      <p>Contact: {name.toLowerCase().replace(" ", ".")}@gmail.com</p>
    </div>
  );
};
```

---

### 📄 Contact Form Component

```jsx
const ContactForm = () => {
  return (
    <form>
      <input type="text" placeholder="YOUR NAME" />
      <br />
      <input type="email" placeholder="YOUR EMAIL" />
    </form>
  );
};
```

---

### 🎨 Styled Form Component

```jsx
const StyledForm = () => {
  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input className="form-input" />
      <br />
      <label htmlFor="email">Email:</label>
      <input className="form-input" tabIndex={1} />
    </form>
  );
};
```

---

### 👨‍💻 User Profile Component

```jsx
const UserProfile = () => {
  return (
    <div>
      <h1>Code Evolution React Course</h1>
      <p>Author: Vishwas</p>
    </div>
  );
};
```

---

## 🧩 React.Fragment and Empty Tags `<> </>`

### 📌 Why React.Fragment Exists

JSX requires that a component returns **a single root element**. Sometimes adding an extra `<div>` just to wrap elements can:

* Break layout
* Add unnecessary nodes to the DOM
* Affect styling or CSS

To solve this, React provides **`React.Fragment`**.

---

### ✅ What is `React.Fragment`?

`React.Fragment` lets you group multiple elements **without adding an extra DOM node**.

```jsx
return (
  <React.Fragment>
    <h1>Hello</h1>
    <p>Welcome to React</p>
  </React.Fragment>
);
```

---

### ✅ Shorthand Syntax: `<> </>`

React also provides a **shorter syntax** for fragments:

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>Welcome to React</p>
  </>
);
```

✔️ This does the **same thing** as `React.Fragment`

---

### ⚠️ Fragment vs Div

| Feature             | `<div>` | `React.Fragment` / `<> </>` |
| ------------------- | ------- | --------------------------- |
| Adds extra DOM node | ✅ Yes   | ❌ No                        |
| Affects layout      | ✅ Yes   | ❌ No                        |
| Cleaner markup      | ❌ No    | ✅ Yes                       |

---

### 🚫 When NOT to Use `<> </>`

You **cannot add props** (like `key`) to the shorthand fragment.

❌ Invalid:

```jsx
<>
  <Item />
</>
```

✅ Use `React.Fragment` instead:

```jsx
<React.Fragment key={id}>
  <Item />
</React.Fragment>
```

---

## 🧠 JSX Takeaway (Summary)

* JSX is **JavaScript**, not HTML
* Components must return **one root element**
* Use **`React.Fragment` or `<> </>`** to avoid unnecessary wrapper divs
* All tags must be **properly closed**
* Attribute names use **camelCase**
* JavaScript expressions are embedded using `{}`
* JSX compiles to `React.createElement()`

✨ JSX gives you the full power of JavaScript while writing clean, readable UI code.

---

## 🚀 Happy Coding with React!
