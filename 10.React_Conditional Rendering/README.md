# ⚛️ React Conditional Rendering (React 19)

This README explains **conditional rendering in React** with **definitions, syntax, real-world examples**, and a **clear summary**. Conditional rendering allows you to control **what UI is displayed** based on application state or props.

---

## 🔢 4 Ways of Conditional Rendering

1. 🧠 If Statements
2. ❓ Ternary Operator (`?:`)
3. 🔗 AND Operator (`&&`)
4. 🧮 Variables for Complex Logic

---

## 🧠 1. If Statements

### 📌 Definition

Use `if` statements when you need **completely different UI** or want to **return `null`** to render nothing.

---

### 🧾 Syntax

```jsx
if (condition) {
  return <Component />;
}

return null;
```

---

### 💡 Example

```jsx
const UserDetails = ({ name, isOnline, hideOffline }) => {
  if (hideOffline && !isOnline) {
    return null;
  }

  if (isOnline) {
    return (
      <div>
        <h3>{name}</h3>
        <span>🟢 Online</span>
        <button>Send Message</button>
      </div>
    );
  }

  return (
    <div>
      <h3>{name}</h3>
      <span>Offline</span>
      <small>Check back later</small>
    </div>
  );
};
```

---

## ❓ 2. Ternary Operator (`?:`)

### 📌 Definition

The ternary operator is ideal for **either / or** rendering inside JSX.

---

### 🧾 Syntax

```jsx
condition ? <TrueUI /> : <FalseUI />
```

---

### 💡 Example

```jsx
<span>{isOnline ? "🟢 Online" : "Offline"}</span>

{isOnline ? (
  <button>Send Message</button>
) : (
  <small>Check back later</small>
)}
```

---

## 🔗 3. AND Operator (`&&`)

### 📌 Definition

The `&&` operator renders JSX **only if the condition is true**.

⚠️ Be careful: `0 && <Component />` will render `0`.

---

### 🧾 Syntax

```jsx
condition && <Component />
```

---

### 💡 Example (❌ Bad)

```jsx
{messages.length && <span>{messages.length} messages</span>}
```

### 💡 Example (✅ Good)

```jsx
{messages.length > 0 && (
  <span>{messages.length} messages</span>
)}
```

---

## 🧮 4. Variables for Complex Logic

### 📌 Definition

When JSX becomes messy, store conditional logic in **variables**.

---

### 🧾 Syntax

```jsx
let badge = null;

if (role === "admin") badge = <span>🔑 Admin</span>;
```

---

### 💡 Example

```jsx
let roleBadge = null;

if (role === "admin") {
  roleBadge = <span> 🔑 Admin</span>;
} else if (role === "moderator") {
  roleBadge = <span> 🎓 Moderator</span>;
} else if (role === "vip") {
  roleBadge = <span> 💎 VIP</span>;
}

<h3>
  {name}
  {isPremium && <span> ⭐</span>}
  {isNewUser && <span> 🎉</span>}
  {roleBadge}
</h3>
```

---

## 🧪 Example App Usage

```jsx
<UserDetails
  name="Bruce Wayne"
  isOnline={true}
  isPremium={true}
  isNewUser={true}
  role="admin"
/>

<UserDetails
  name="Clark Kent"
  isOnline={false}
  hideOffline={true}
  role="vip"
/>
```

---

## ✅ Conditional Rendering Summary

1. 🧠 **If Statements**
   Best for totally different renders or returning `null`

2. ❓ **Ternary Operator (`?:`)**
   Perfect for either / or decisions

3. 🔗 **AND Operator (`&&`)**
   Ideal for simple show / hide UI

4. 🧮 **Variables**
   Best for complex logic that would clutter JSX

---

### 🚀 Best Practice Tip

Use **simple conditions in JSX**, and move **complex logic to variables or functions** to keep components readable.

Happy Coding! 🎉
