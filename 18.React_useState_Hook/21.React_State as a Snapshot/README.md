# 📸 State as a Snapshot (React)

## 📘 Definition

In React, **state is a snapshot in time**. When a component renders, React gives it a fixed snapshot of state values for that render. Calling a state setter (like `setCount`) **does not immediately change the state variable** you are using in the current render or event handler. Instead, it **schedules an update for the next render**.

---

## 🧠 Key Idea

* State updates are **not immediate**
* Each render has its **own frozen snapshot** of state
* Event handlers run **from start to finish using the same snapshot**
* React updates the UI **only after the render phase**

Think of state like taking a photo 📷 — once the photo is taken, it doesn’t change even if things move afterward.

---

## ⚙️ Syntax

```js
const [state, setState] = useState(initialValue);

setState(newValue); // schedules update for next render
```

---

## 🔄 Trigger vs Render Phase

### Trigger Phase

* Happens when you call a setter (`setCount`)
* React **queues the update**
* State value does **NOT change immediately**

### Render Phase

* React calls your component again
* A **new snapshot** of state is created
* JSX is recalculated

### Commit Phase

* React updates **only what changed** in the DOM

---

## 🧪 Example: State as a Snapshot

```jsx
import React, { useState } from 'react';

const SimpleCounter = () => {
  const [count, setCount] = useState(0);

  console.log('render phase: count =', count);

  const handleClick = () => {
    setCount(count + 1);
    console.log('After +1:', count);

    setCount(count + 5);
    console.log('After +5:', count);

    setCount(count + 10);
    console.log('After +10:', count);

    setTimeout(() => {
      console.log('After 2 seconds:', count);
    }, 2000);
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

---

## ❓ What Actually Happens

Initial snapshot: `count = 0`

Queued updates:

* `setCount(0 + 1)` → 1
* `setCount(0 + 5)` → 5
* `setCount(0 + 10)` → 10

➡️ **Last update wins**

Final count after render: **10**

Even inside `setTimeout`, `count` is still **0**, because it closes over the same snapshot.

---

## ⚠️ Common Mistake

Assuming state changes immediately:

```js
setCount(count + 1);
console.log(count); // ❌ still old value
```

---

## ✅ Correct Way: Functional Updates

Use this when you depend on the previous state:

```js
setCount(prev => prev + 1);
setCount(prev => prev + 5);
setCount(prev => prev + 10);
```

✔️ These updates run **in order** and produce the correct final value.

---

## 🧾 Summary

* 🧊 State is **frozen per render**
* ⏳ `setState` schedules updates, it doesn’t apply them immediately
* 🔁 Multiple updates in one handler use the **same snapshot**
* 🏆 Last non-functional update wins
* ✅ Use **functional updates** when chaining state changes

This concept is **critical for understanding React rendering, batching, and bugs related to state updates**.
