# useState with Objects (React)

## 📘 Definition

`useState` with objects allows you to store and manage complex state (multiple related values) inside a single state variable. In React, state is **immutable**, meaning you should never modify objects directly. Instead, always create a **new object** when updating state using the setter function.

---

## 🧠 Key Rules

* ❌ Never mutate state directly (e.g., `user.name = 'Clark'`)
* ✅ Always use the setter function (`setUser`)
* 🔁 Updating an object **replaces the entire object**, not merges it
* 🧩 Use the **spread operator (`...`)** to preserve existing properties
* 🪆 For nested objects, spread **each level** that changes

---

## ✍️ Syntax

### Basic object state

```js
const [user, setUser] = useState({
  name: "Bruce Wayne",
  age: 30,
});
```

### Updating a single field (correct way)

```js
setUser({
  ...user,
  name: "Clark Kent"
});
```

### Updating multiple fields

```js
setUser({
  ...user,
  name: "Clark Kent",
  age: 31
});
```

### Updating a nested object

```js
setUser({
  ...user,
  address: {
    ...user.address,
    city: "Metropolis"
  }
});
```

---

## 🧪 Example Component

```jsx
import React, { useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Bruce Wayne",
    age: 30,
    email: "bruceway@gmail.com",
    address: {
      city: "Gotham City",
      country: "USA",
    }
  });

  const updateName = () => {
    setUser({ ...user, name: "Clark Kent" });
  };

  const updateAge = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  const updateMultiple = () => {
    setUser({ ...user, name: "Clark Kent", age: 31 });
  };

  const updateCity = () => {
    setUser({
      ...user,
      address: { ...user.address, city: "Metropolis" }
    });
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
      <p>Country: {user.address.country}</p>

      <button onClick={updateName}>Change Name</button>
      <button onClick={updateAge}>Increase Age</button>
      <button onClick={updateMultiple}>Update Name & Age</button>
      <button onClick={updateCity}>Move City</button>
    </div>
  );
};

export default UserProfile;
```

---

## ⚠️ Common Mistakes

❌ **Direct mutation (WRONG)**

```js
user.name = "Clark Kent"; // ❌ No re-render
```

❌ **Forgetting to spread old object**

```js
setUser({ name: "Clark Kent" }); // ❌ Loses age, email, address
```

---

## ✅ Best Practices

* Prefer **multiple `useState` hooks** if state grows too complex
* Use **updater functions** when new state depends on old state
* Keep state **flat** when possible
* For deep updates, consider libraries like `immer`

---

## 🧾 Summary

* `useState` objects must be updated immutably
* Calling `setState` with an object **replaces**, not merges
* Always spread the previous object to keep existing fields
* For nested updates, spread each nested level
* Correct object updates ensure predictable re-renders and clean code

✨ Mastering object state updates is essential for building real-world React applications.
