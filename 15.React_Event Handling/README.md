# 🖱️ Handling Events in React (React 19)

This README explains **how event handling works in React** using simple, real-world examples. Event handling allows React components to respond to user interactions such as clicks, form submissions, input changes, and mouse events.

---

## 📌 What is Event Handling in React?

Event handling in React is the process of **responding to user actions** (events) by executing JavaScript functions.

Examples of events:

* Clicking a button
* Typing in an input
* Submitting a form
* Hovering over an element

React uses **camelCase event names** and passes functions as event handlers.

---

## 🔄 How Event Handling Works (2-Step Process)

1️⃣ Define a function that should run when an event occurs
2️⃣ Assign that function to a special prop that starts with `on`

---

## 🧠 Common React Event Props

* `onClick` – mouse click
* `onChange` – input change
* `onSubmit` – form submission
* `onMouseEnter` – hover
* `onMouseLeave`

---

## ✍️ Syntax

```jsx
<button onClick={handleClick}>Click Me</button>
```

⚠️ **Important:**

* Pass the function reference, **do not call it**
* ✅ `onClick={handleClick}`
* ❌ `onClick={handleClick()}`

---

## 🧪 Example 1: Basic Button Click

```jsx
import React from 'react'

const CustomButton = () => {
  const handleClick = () => {
    alert("Thanks for liking!");
  };

  return (
    <button onClick={handleClick}>Like</button>
  );
};

export default CustomButton;
```

---

## 🧪 Example 2: Inline Event Handler

```jsx
<button onClick={() => alert("Successfully Submitted!")}>Submit</button>
```

📌 Use inline handlers for **simple logic only**.

---

## 🧪 Example 3: Using the Event Object

React automatically provides an **event object** with useful information.

```jsx
const handleEvent = (e) => {
  console.log("Clicked element:", e.target);
  console.log("Mouse position:", e.clientX, e.clientY);
  console.log("Mouse button:", e.button);
};

<button onClick={handleEvent}>Event Button</button>
```

---

## 🧪 Example 4: Accessing Props & Variables

Event handlers have access to component **props and variables**.

```jsx
import React from 'react'

const DynamicCustomButton = ({ text }) => {
  const name = "Codevolution";

  const handleClick = () => {
    console.log(`Hey ${name}, you clicked ${text}`);
  };

  return (
    <button onClick={handleClick}>{text}</button>
  );
};

export default DynamicCustomButton;
```

---

## 🧪 Example Usage in App Component

```jsx
import CustomButton from './CustomButton';
import DynamicCustomButton from './DynamicCustomButton';

function App() {
  return (
    <>
      <CustomButton />
      <DynamicCustomButton text="Like" />
      <DynamicCustomButton text="Bookmark" />
    </>
  );
}

export default App;
```

---

## ⚠️ Common Mistakes

❌ Calling the function instead of passing it
❌ Writing inline handlers with complex logic
❌ Forgetting to use the event object when needed

---

## 📝 Summary

✅ Event handling in React uses special props like `onClick`
✅ Always pass a function reference, not a function call
✅ React events work similarly to JavaScript events
✅ Event handlers can access props, state, and variables
✅ Use the event object (`e`) for detailed event info

---

🚀 **Mastering events is essential for building interactive React apps!**
