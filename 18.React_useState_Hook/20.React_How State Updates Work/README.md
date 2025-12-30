# 🔄 How State Updates Work in React

## 📘 Definition

In React, **updating state does not immediately change the UI**. Instead, React follows a **three-phase lifecycle** to update the UI efficiently and predictably:

1. ⚡ **Trigger Phase**
2. 🔁 **Render Phase**
3. ✅ **Commit Phase**

Understanding these phases helps explain why `setState` (or `setCount`) behaves asynchronously.

---

## ⚙️ The 3 Phases of State Updates

### ⚡ Trigger Phase

This phase starts **the moment you call a state setter function** like `setCount()`.

* React marks the component as **needing an update**
* ❌ UI is **NOT updated yet**
* React queues the component for re-rendering

> Think of this as: *"Something changed — remember to re-render later"*

---

### 🔁 Render Phase

During this phase:

* React **calls your component function again**
* A **new JSX tree** is created
* React compares the **new JSX with the previous one** (diffing)

🔍 Important notes:

* No DOM updates happen here
* Rendering is **pure and side-effect free**

---

### ✅ Commit Phase

This is the final phase where React:

* Applies **only the actual changes** to the DOM
* Updates text, attributes, or elements that changed

💡 React is efficient — it never re-renders the entire DOM unnecessarily.

---

## 🧠 How `setCount` Actually Works (Step-by-Step)

1️⃣ You call `setCount(count + 1)` → **Trigger Phase**

2️⃣ React flags the component as dirty

3️⃣ React re-runs the component function → **Render Phase**

4️⃣ New JSX is returned with updated state

5️⃣ React compares old vs new JSX

6️⃣ React updates only what changed in the DOM → **Commit Phase**

---

## 🧪 Example: Simple Counter

```jsx
import React, { useState } from 'react'

const SimpleCounter = () => {
  console.log("Component rendered");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Before setCount:", count);
    setCount(count + 1);
    console.log("After setCount:", count);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default SimpleCounter;
```

### 🧾 Output Explanation

* The `console.log` **after** `setCount` still shows the old value
* This happens because the state update is **scheduled**, not immediate

✅ The updated value appears **on the next render**

---

## ⚠️ Key Takeaways

* 🧠 State updates are **asynchronous**
* 🔁 Re-rendering does NOT instantly update the DOM
* ⚡ `setState` triggers a lifecycle, it doesn’t mutate state immediately
* 🎯 React batches updates for better performance

---

## 🧾 Final Summary

* React updates UI in **three phases**: Trigger → Render → Commit
* Calling a setter function **queues an update**, it doesn’t update instantly
* The component function runs again with new state
* React efficiently updates **only what changed** in the DOM

🚀 Mastering this concept helps you:

* Avoid confusing bugs
* Write predictable React code
* Perform better in interviews

---

⭐ *Tip:* If you need the latest state value, use the **functional updater**:

```js
setCount(prev => prev + 1);
```
