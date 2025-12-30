# ⚛️ React useState Hook (React 19)

## 📌 Definition

The **useState hook** is a built-in React hook that allows functional components to **store, update, and persist state**. When the state changes, React automatically **re-renders** the component to reflect the updated UI.

`useState` solves two major problems:

* React knows **when to update the screen**
* React **remembers values between renders**

---

## ❗ Problems Without useState

Using normal variables causes issues:

* ❌ React doesn’t know when to update the UI
* ❌ Values reset on every render

This is why state is required for **interactive applications**.

---

## 🧠 How useState Works

When we call the setter function:

1. React updates the state value
2. React re-renders the component
3. useState provides the updated value
4. The UI reflects the new state

---

## 🧩 Syntax

### Basic Syntax

```jsx
const [stateValue, setStateValue] = useState(initialValue);
```

* `stateValue` → current state
* `setStateValue` → updates the state
* `initialValue` → initial state value

---

## 🐢 Lazy Initialization (Advanced)

Useful when the initial state requires **expensive computation**.

```jsx
const [count, setCount] = useState(() => {
  console.log("Initial state function called");
  return 0;
});
```

✔️ The function runs **only once** on the first render

### Common Use Cases

* Reading from localStorage
* Fetching initial data
* Heavy calculations

---

## 🧪 Example 1: Counter Component

```jsx
import { useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button onClick={handleClick}>Count: {count}</button>
  );
};

export default Count;
```

### Key Points

* Each `Count` component has its **own state**
* Updating state triggers a re-render

---

## 🧪 Example 2: LoginCard (Multiple States)

```jsx
import { useState } from 'react';

const LoginCard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <button onClick={handleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

      <input
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Type a message"
      />

      <h1>{message}</h1>
    </div>
  );
};

export default LoginCard;
```

### What This Shows

* Multiple state variables in one component
* Controlled inputs using state
* Conditional rendering with state

---

## 🧠 Important Notes

* State updates are **asynchronous**
* Never modify state directly
* Each component instance has its **own local state**

---

## 📝 Summary

* `useState` adds state to functional components
* State updates trigger re-renders
* State values persist between renders
* Lazy initialization improves performance
* You can use multiple `useState` hooks per component
* Each component instance manages its own state

---

🚀 **Without useState → static UI**

⚛️ **With useState → real interactive React apps**
