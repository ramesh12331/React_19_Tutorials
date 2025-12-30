# 📦 React Batching (How React Groups State Updates)

## 📘 Definition

**Batching** is a React optimization where multiple state updates are **grouped together and applied in a single render** instead of triggering multiple re-renders.

React waits until your **event handler finishes**, collects all state updates, and then performs **one render + one DOM commit**.

---

## 🧠 Simple Intuition

Think of React like a **restaurant waiter** 🍽️:

* You name several dishes
* The waiter does NOT run to the kitchen every time
* They wait until you're done ordering
* Then take **one complete order** to the kitchen

React does the same with state updates.

---

## 🔄 State Update Cycle

When you update state, React goes through these steps:

1. **Trigger phase** – you call `setState`
2. **Snapshot behavior** – state values stay frozen during the event
3. **Queue updates** – values/functions are collected
4. **Batching** – all updates are grouped
5. **Render phase** – component runs once
6. **Commit phase** – DOM updates happen once

---

## ⚙️ Syntax

### Multiple Updates in One Handler

```js
setCount(prev => prev + 1);
setCount(prev => prev + 5);
setCount(prev => prev + 10);

setName('Updated');
setIsActive(true);
```

➡️ React batches all of these into **one render**.

---

## 🧪 Example: Batching in Action

```jsx
import React, { useState } from 'react';

const BatchingCounter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [isActive, setIsActive] = useState(false);

  console.log('Render phase: Component rendering');

  const handleClick = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 5);
    setCount(prev => prev + 10);

    setName('Updated');
    setIsActive(true);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <p>Name: {name}</p>
      <p>Active: {isActive ? 'Yes' : 'No'}</p>
      <button onClick={handleClick}>Update all three</button>
    </div>
  );
};

export default BatchingCounter;
```

---

## 🔍 What Happens Internally

Initial state snapshot:

* `count = 0`
* `name = ''`
* `isActive = false`

Queued updates:

* `count`: +1 → +5 → +10 (using updater functions)
* `name`: 'Updated'
* `isActive`: true

➡️ React computes everything and renders **once**.

Final state after render:

* `count = 16`
* `name = 'Updated'`
* `isActive = true`

---

## ❗ Important Notes

* Batching prevents unnecessary re-renders
* All updates inside **event handlers** are batched
* Using updater functions ensures correct results
* Console logs inside handlers show **old snapshot values**

---

## 🧾 Summary

* 📦 React batches multiple state updates together
* ⏳ Updates wait until the event handler finishes
* 🧊 State values are snapshots during the event
* 🔁 Updater functions apply changes sequentially
* 🚀 Result: fewer renders, better performance

Batching is a **core performance optimization** in React and explains why state updates feel asynchronous.
