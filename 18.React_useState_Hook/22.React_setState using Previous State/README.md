# 🔁 setState Using Previous State (React)

## 📘 Definition

In React, when a new state value **depends on the previous state**, you must use the **updater function form** of `setState` / `setCount`.

Instead of passing a value, you pass a **function**. React will call this function later with the **most recent state value**, ensuring updates are applied **in the correct order**.

---

## 🧠 Why This Matters

Because React state is a **snapshot per render**, multiple `setState(value)` calls in the same event handler all use the **same old state**.

➡️ This can lead to bugs where only the **last update wins**.

Using the updater function solves this by:

* Queuing functions instead of values
* Applying each update **sequentially**
* Always using the **latest state**

---

## ⚙️ Syntax

### ❌ Passing a Value (Snapshot-based)

```js
setCount(count + 1);
```

### ✅ Passing a Function (Previous State)

```js
setCount(prev => prev + 1);
```

* `prev` is the **latest state value** at update time
* React decides **when** to run this function

---

## 🔄 Value vs Function Updates

### Passing Values (Last One Wins)

```js
setCount(count + 1); // 0 → 1
setCount(count + 5); // 0 → 5
setCount(count + 10); // 0 → 10
// Final count = 10
```

All updates use the **same snapshot (0)**.

---

### Passing Functions (All Updates Applied)

```js
setCount(prev => prev + 1);  // 0 → 1
setCount(prev => prev + 5);  // 1 → 6
setCount(prev => prev + 10); // 6 → 16
// Final count = 16
```

Each update builds on the **latest value**.

---

## 🧪 Example: Using Previous State Correctly

```jsx
import React, { useState } from 'react';

const PrevStateCounter = () => {
  const [count, setCount] = useState(0);

  console.log('render phase: count =', count);

  const handleClick = () => {
    setCount(prev => {
      console.log('First updater:', prev);
      return prev + 1;
    });

    setCount(prev => {
      console.log('Second updater:', prev);
      return prev + 5;
    });

    setCount(prev => {
      console.log('Third updater:', prev);
      return prev + 10;
    });
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default PrevStateCounter;
```

---

## 🔍 What React Does Internally

1. React **queues updater functions** during the trigger phase
2. After the event handler finishes, React processes the queue
3. Each function receives the **latest state value**
4. The return value becomes the **next state**

Example flow:

* Start: `0`
* `prev + 1` → `1`
* `prev + 5` → `6`
* `prev + 10` → `16`

---

## ❓ When to Use Which

### ✅ Use updater function when:

* New state depends on old state
* Multiple updates happen in one handler
* Updates happen asynchronously (timeouts, promises)

```js
setCount(prev => prev + 1);
```

### ✅ Use direct value when:

* State does NOT depend on previous value

```js
setCount(5);
setName('John');
```

---

## 🧾 Summary

* 🧊 State values are **snapshots per render**
* ❌ Passing values can cause lost updates
* 🔁 Passing functions queues logic instead of values
* 🧠 Each updater receives the **latest state**
* ✅ Always use updater functions when state depends on previous state

This pattern is **essential for writing safe, predictable React code** and is a **common interview question**.
