# ♻️ Reusable Components & Event Handlers as Props (React)

## 📘 Definition

Reusable components are React components designed to be used in multiple places with different behaviors or data. Instead of hardcoding logic inside the component, **the parent controls behavior by passing data and event handlers as props**.

This pattern allows:

* Cleaner code
* Better separation of concerns
* Highly flexible UI components

---

## 🧠 Core Idea

> **Same component, different behavior — controlled by the parent**

In React:

* **Parent → Child** communication uses props
* **Child → Parent** communication also uses props (by passing event handlers)

---

## 🧩 Syntax (Event Handlers as Props)

### Parent Component

```jsx
const handleAction = () => {
  console.log("Action triggered");
};

<ActionButton text="Click Me" onClick={handleAction} />
```

### Child Component

```jsx
const ActionButton = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};
```

✔️ The child **does not decide what happens**
✔️ The parent **decides the behavior**

---

## 🔁 Example 1: Reusable Action Button

### ActionButton.jsx

```jsx
const ActionButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>{text}</button>
  );
};

export default ActionButton;
```

---

### Contact.jsx

```jsx
import ActionButton from './ActionButton';

const Contact = () => {
  const handleSendMessage = () => {
    alert("Send your message");
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <ActionButton text="Send Message" onClick={handleSendMessage} />
    </div>
  );
};

export default Contact;
```

---

### NewsLetter.jsx

```jsx
import ActionButton from './ActionButton';

const NewsLetter = () => {
  const handleSubscribe = () => {
    alert("Thank you for subscribing!");
  };

  return (
    <div>
      <h2>Subscribe to Newsletter</h2>
      <ActionButton text="Subscribe" onClick={handleSubscribe} />
    </div>
  );
};

export default NewsLetter;
```

🟢 Same button component
🟢 Different behavior

---

## 🍔 Example 2: Passing Arguments from Child to Parent

### MenuItem.jsx

```jsx
const MenuItem = ({ name, price, onOrder }) => {
  return (
    <div>
      <span>{name} - ${price}</span>
      <button onClick={() => onOrder(name, price)}>Order</button>
    </div>
  );
};

export default MenuItem;
```

---

### Menu.jsx

```jsx
import MenuItem from './MenuItem';

const Menu = () => {
  const handleOrder = (itemName, itemPrice) => {
    alert(`Your Order: ${itemName} for $${itemPrice}`);
  };

  return (
    <div>
      <h2>Our Menu</h2>
      <MenuItem name="Pizza" price={12} onOrder={handleOrder} />
      <MenuItem name="Burger" price={8} onOrder={handleOrder} />
      <MenuItem name="Salad" price={6} onOrder={handleOrder} />
    </div>
  );
};

export default Menu;
```

🟢 Child triggers the event
🟢 Parent controls the logic

---

## 🧠 Why This Pattern Matters

✔️ Encourages **component reusability**
✔️ Keeps components **simple and predictable**
✔️ Makes apps **easier to scale**
✔️ Follows React's **unidirectional data flow**

---

## 🧾 Summary

* Reusable components should **not contain business logic**
* Parents control behavior by passing **event handlers as props**
* Children only **notify** that something happened
* This pattern is essential for:

  * Buttons
  * Forms
  * Cards
  * Lists
  * Menus

> 🧠 **Rule of Thumb:**
> "The child reports the event. The parent decides what to do."

---

⭐ Perfect for interviews, real-world apps, and clean React architecture
