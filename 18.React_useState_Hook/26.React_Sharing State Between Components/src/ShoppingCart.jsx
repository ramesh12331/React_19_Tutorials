import { useState } from "react"

// ShoppingCart is the PARENT component
export const ShoppingCart = () => {

      // State is an OBJECT holding quantities of each product
    const [cartItems, setCartItems] = useState({
        reactCourse : 0,
        vueCourse : 0
    })

    // Prices are static (not state, because they never change)
    const prices = {
        reactCourse: 49.99,
        vueCourse: 39.99
    }

    // Add React course (max limit: 5)
    const handleAddReactCourse = () =>{
        // Guard condition to prevent exceeding limit
        if(cartItems.reactCourse < 5){

            // ✅ Immutable state update
            // Copy existing object and update only reactCourse
            setCartItems({
            ...cartItems,
            reactCourse: cartItems.reactCourse + 1,
        })
        }
    }

      // Add Vue course
    const handleAddVueCourse = () =>{
         // Immutable update for vueCourse
        setCartItems({
            ...cartItems,
            vueCourse : cartItems.vueCourse + 1,
        })
    }

    // Reset cart to initial state
    const clearCart = () =>{
        // Replace entire state object
        setCartItems({
            reactCourse : 0,
            vueCourse : 0,
        })
    }
    return(
        <>
            <h2>Shopping cart component</h2>
            {/* ProductCard for React Course */}
            <ProductCard name="React Course" price={prices.reactCourse} quantity={cartItems.reactCourse} onAddToCart={handleAddReactCourse}/>
            {/* ProductCard for Vue Course */}
            <ProductCard name="Vue Course" price={prices.vueCourse} quantity={cartItems.vueCourse} onAddToCart={handleAddVueCourse}/>
            {/* Derived data displayed in CartSummary */}
            <CartSummary cartItems={cartItems} prices={prices}/>
            {/* Clear all items */}
            <button onClick={clearCart}>Clear Cart</button>
        </>
    )
}

// ProductCard is a REUSABLE child component
export const ProductCard = ({name, price, quantity, onAddToCart}) =>{
    
    return(
        <div>
            <h3>{name}</h3>
            {/* Display product price */}
            <p>${price}</p>
            {/* Quantity comes from parent state */}
            <p>Quantity: {quantity}</p>
            {/* Trigger parent handler */}
            <button onClick={onAddToCart}>Add to Cart</button>
        </div>
    )
}


// CartSummary calculates values DERIVED from state
export const CartSummary = ({cartItems, prices}) =>{
     // Derived state: total number of items
    const totalItems = cartItems.reactCourse + cartItems.vueCourse;
     // Derived state: total price
    const totalPrice = cartItems.reactCourse * prices.reactCourse + cartItems.vueCourse * prices.vueCourse
    return (
        <div>
            <h3>Cart summary</h3>
            {/* Derived values, not stored in state */}
            <p>Total items : {totalItems}</p>
            <p>Total price : ${totalPrice.toFixed(2)}</p>
        </div>
    )
}

// State objects must be updated IMMUTABLY
// Spread operator (...) copies existing state
// Child components receive data via props
// Derived values should NOT be stored in state
// Parent owns state, children trigger updates