# useState with Arrays in React

## 📘 Definition

`useState` with arrays in React allows you to store and manage a list of items as component state. Since React state is **immutable**, you must always create a **new array** when updating state. Directly mutating the existing array will **not trigger a re-render**.

---

## 🧠 Key Rules

* ❌ Never modify arrays directly (`push`, `splice`, direct index assignment)
* ✅ Always use the state setter function
* 🔁 Every update should return a **new array reference**

---

## ✍️ Common Syntax Patterns

### Add items (Spread / Concat)

```js
setItems([...items, newItem]);
// or
setItems(items.concat(newItem));
```

### Remove items (Filter)

```js
setItems(items.filter(item => item.id !== id));
```

### Update items (Map)

```js
setItems(items.map(item =>
  item.id === id ? { ...item, done: !item.done } : item
));
```

---

## 🧪 Example: Todo List

```jsx
import React, { useState } from 'react';

const TodoList = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: "Build an app", done: false }
  ]);

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      text: "Deploy to production",
      done: false
    };
    setItems(items.concat(newItem));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const toggleDone = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, done: !item.done } : item
    ));
  };

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <span style={{ textDecoration: item.done ? "line-through" : "none" }}>
              {item.text}
            </span>
            <button onClick={() => toggleDone(item.id)}>
              {item.done ? "Undo" : "Done"}
            </button>
            <button onClick={() => removeItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default TodoList;
```

---

## ⚠️ Common Mistakes

```js
items.push(newItem); // ❌ no re-render
setItems(items);     // ❌ same reference
```

Why this fails:

* React compares **references**, not contents
* Mutating the same array keeps the reference unchanged

---

## ✅ Best Practices

* Prefer `map`, `filter`, `concat`, and spread (`...`)
* Use stable and unique `key` props when rendering lists
* Consider splitting state if array items become complex

---

## 🧾 Summary

* Arrays in React state must be treated as **immutable**
* Always return a **new array** when updating state
* Use:

  * ➕ `spread / concat` to add
  * ❌ `filter` to remove
  * ✏️ `map` to update
* Following these patterns ensures predictable re-renders and bug-free UI

🚀 Mastering array updates is essential for building real-world React applications.
