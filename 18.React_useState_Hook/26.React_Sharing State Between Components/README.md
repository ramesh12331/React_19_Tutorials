🎯 **React – Sharing State Between Components**

# Sharing State Between Components in React

## Definition

Sharing state in React means **moving (lifting) state to the closest common parent component** when multiple child components need access to the same changing data. The parent owns the state, while children receive data via props and request updates through callback functions.

This pattern ensures **single source of truth**, predictable data flow, and easier debugging.

---

## When to Share State

You should share (lift) state when:

* Two or more components need the same data
* One component updates data that another component depends on
* You want consistent UI behavior across components

---

## Core Concept: Lifting State Up

1. Identify shared data
2. Move `useState` to the closest common parent
3. Pass state down as props
4. Pass setter or handler functions down to children

---

## Syntax

### Parent Component

```jsx
const Parent = () => {
  const [state, setState] = useState(initialValue);

  return (
    <Child value={state} onChange={setState} />
  );
};
```

### Child Component

```jsx
const Child = ({ value, onChange }) => {
  return <button onClick={() => onChange(value + 1)}>Update</button>;
};
```

---

## Example: Shopping Cart (Shared State)

### Parent Component (ShoppingCart)

```jsx
export const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState({
    reactCourse: 0,
    vueCourse: 0
  });

  const prices = {
    reactCourse: 49.99,
    vueCourse: 39.99
  };

  return (
    <>
      <ProductCard
        name="React Course"
        price={prices.reactCourse}
        quantity={cartItems.reactCourse}
        onAddToCart={() => setCartItems({
          ...cartItems,
          reactCourse: cartItems.reactCourse + 1
        })}
      />

      <ProductCard
        name="Vue Course"
        price={prices.vueCourse}
        quantity={cartItems.vueCourse}
        onAddToCart={() => setCartItems({
          ...cartItems,
          vueCourse: cartItems.vueCourse + 1
        })}
      />

      <CartSummary cartItems={cartItems} prices={prices} />
    </>
  );
};
```

### Child Component (ProductCard)

```jsx
export const ProductCard = ({ name, price, quantity, onAddToCart }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>${price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};
```

### Child Component (CartSummary)

```jsx
export const CartSummary = ({ cartItems, prices }) => {
  const totalItems = cartItems.reactCourse + cartItems.vueCourse;
  const totalPrice =
    cartItems.reactCourse * prices.reactCourse +
    cartItems.vueCourse * prices.vueCourse;

  return (
    <div>
      <h3>Cart Summary</h3>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};
```

---

## Data Flow Visualization

```
ShoppingCart (state owner)
 ├── ProductCard (React)
 ├── ProductCard (Vue)
 └── CartSummary
```

* State lives in **ShoppingCart**
* Data flows **down** via props
* Updates flow **up** via callbacks

---

## Best Practices

* Keep state as high as necessary, not higher
* Avoid duplicating the same state in multiple components
* Pass only required data to children
* Use updater functions when new state depends on previous state

---

## Common Mistakes

❌ Keeping duplicate state in child components
❌ Mutating state directly
❌ Passing too many unrelated props (prop drilling without need)

---

## Summary

* Shared state should live in the **closest common parent**
* The parent component **owns and controls** the state
* Children receive data via **props**
* Children request changes via **callback functions**
* This pattern ensures predictable, maintainable React applications

---

✅ Mastering shared state is essential before moving to Context API or state management libraries like Redux.
