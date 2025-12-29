# ⚛️ React Props Patterns (React 19)

This README explains common **props patterns in React** with clear **definitions, syntax, examples**, and a **final summary**. These patterns help you write reusable, flexible, and clean components.

---

## 🧩 1. Default Props

### 📌 Definition

Default props allow a component to use **fallback values** when a prop is **missing or undefined**.

> ⚠️ Default values are **NOT** used if you pass `null`, `0`, or `false`.

---

### 🧾 Syntax

```jsx
const Greeting = ({ name = "Guest", message = "Hello" }) => {
  return <h1>{message}, {name}</h1>;
};
```

---

### 💡 Example Usage

```jsx
<Greeting name="Bruce" message="Good morning" />
<Greeting name="Clark" />
<Greeting message="Welcome" />
<Greeting />
```

---

## 🔁 2. Forwarding Props (Spread Operator)

### 📌 Definition

Props forwarding allows a parent component to **pass all remaining props** to a child component using the **spread operator (`...`)**.

This is useful for **wrapper components** or **reusable layouts**.

---

### 🧾 Syntax

```jsx
const UserCard = ({ id, ...rest }) => {
  return (
    <div>
      <h2>User {id} Details</h2>
      <UserInfo {...rest} />
    </div>
  );
};
```

---

### 💡 Example

```jsx
<UserCard
  id={1}
  name="Bruce Wayne"
  age={35}
  city="Gotham"
  email="batman@gmail.com"
/>
```

```jsx
const UserInfo = ({ name, age, city, email }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <p>Email: {email}</p>
    </div>
  );
};
```

---

## 🧱 3. Passing JSX as Children

### 📌 Definition

The `children` prop allows components to **receive nested JSX**, similar to how HTML elements work.

Think of `children` as a **slot** that the parent component fills.

---

### 🧾 Syntax

```jsx
const CardWrapper = ({ title, children }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};
```

---

### Examples

#### Text Content

```jsx
<CardWrapper title="Simple Card">
  Just some text content
</CardWrapper>
```

#### Multiple Elements

```jsx
<CardWrapper title="Contact Card">
  <h3>Jane Smith</h3>
  <p>jane@example.com</p>
  <p>555-0123</p>
</CardWrapper>
```

#### Other Components

```jsx
<CardWrapper title="User Details">
  <UserInfo />
  <UserStats />
</CardWrapper>
```

#### No Children

```jsx
<CardWrapper title="Empty Card" />
```

---

## 🧠 Children = Slot Concept

A component with `children` works like a **slot**:

* Parent decides **what content** goes inside
* Child decides **where to render it**

Common use cases:

* Layouts
* Cards
* Modals
* Sidebars
* Reusable containers

---

## ✅ Final Summary

✅ **Default Props**

* Provide fallback values
* Used only when props are `undefined` or missing

✅ **Props Forwarding**

* Use `...props` to pass data through components
* Great for wrapper and reusable components

✅ **Children Prop**

* Enables component composition
* Works like HTML nesting
* Makes layouts flexible and reusable

---

### 🚀 Best Practice Tip

Combine all three patterns to build **clean, scalable, and reusable React components**.

Happy Coding! 🎉
