# ⚛️ React Props

## 📌 Definition

**Props** (short for *properties*) are a way to pass data from one component to another in React. They allow components to communicate with each other and make components reusable and dynamic.

Props flow **one-way** (from parent to child) and are **read-only**, meaning a child component cannot modify the props it receives.

---

## 🌟 Why Props Are Important

* Enable communication between components
* Make components reusable
* Allow components to be dynamic
* Work like function arguments in JavaScript

---

## 🧩 Syntax

### Passing Props (Parent Component)

```jsx
<Welcome name="John" alias="Johnny" />
```

### Receiving Props (Child Component)

```jsx
const Welcome = (props) => {
  return <h1>Welcome, {props.name} a.k.a {props.alias}</h1>;
};
```

---

## 💡 Example 1: Using Props

### Welcome Component

```jsx
import React from 'react';

const Welcome = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Welcome, {props.name}! a.k.a {props.alias}</h1>
    </div>
  );
};

export default Welcome;
```

### Usage

```jsx
<Welcome name="Alice" alias="Al" />
```

---

## ✂️ Destructuring Props

Destructuring makes the code cleaner and more readable by extracting values directly from the props object.

### Example 2: Product Component

```jsx
import React from 'react';

const Product = ({ title, price, inStock, categories }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <p>In stock: {inStock ? "YES" : "NO"}</p>
      <p>Categories: {categories.join(', ')}</p>
    </div>
  );
};

export default Product;
```

### Usage

```jsx
<Product
  title="Laptop"
  price={1200}
  inStock={true}
  categories={["Electronics", "Computers"]}
/>
```

---

## 📦 What You Can Pass as Props

* Strings
* Numbers
* Booleans
* Arrays
* Objects
* Functions
* JSX elements

---

## 🧠 Mental Model

* React components are like JavaScript functions
* Props are like function arguments
* Components return JSX instead of values

---

## ✅ Summary

* Props stand for *properties*
* Props are how React components communicate
* They are passed from parent to child
* Props are read-only
* They make components reusable and dynamic
* You access props using the `props` object or destructuring
* Destructuring is the cleanest way to work with props

---

Happy Coding 🚀
