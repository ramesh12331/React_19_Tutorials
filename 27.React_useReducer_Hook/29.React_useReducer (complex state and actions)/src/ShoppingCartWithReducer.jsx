// import React, { useReducer } from 'react'

// const initialState = {
//     items : [], // {id, name, price, quantity}
//     totalAmount : 0,
//     totalItems : 0,
// }

// const reducer = (state, action) =>{
//     // return new state
//     switch (action.type){

//         default:
//             return state;
//     }
// }
// const ShoppingCartWithReducer = () => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     const products = [
//         {id: 1, name:"React Course", price: 49.99},
//         {id: 2, name:"Node.js Course", price: 39.99},
//         {id: 3, name:"JavaScript Bundle", price: 89.99},
//     ]
//   return (
//     <div>
//       <h2>Products</h2>
//       {products.map((product)=>(
//         <div key={product.id}>
//             <h3>{product.name} - ${product.price}</h3>
//             <button>Add to cart</button>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default ShoppingCartWithReducer


// **********************

import { useReducer } from "react";

/* =========================
   ACTION TYPES (constants)
   ========================= */
// Using constants avoids typos and makes actions easier to manage
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";
const CLEAR_CART = "CLEAR_CART";

/* =========================
   INITIAL STATE
   ========================= */
// Centralized state for the cart
const initialState = {
  items: [],        // array of { id, name, price, quantity }
  totalAmount: 0,  // derived value
  totalItems: 0,   // derived value
};

/* =========================
   REDUCER FUNCTION
   ========================= */
// reducer decides HOW state changes based on action.type
const reducer = (state, action) => {
  switch (action.type) {

    /* -------- ADD ITEM -------- */
    case ADD_ITEM: {
      // Check if item already exists in cart
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let updatedItems;

      if (existingItemIndex >= 0) {
        // Item exists → increase quantity
        updatedItems = [...state.items];

        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
      } else {
        // Item does not exist → add new item
        updatedItems = [
          ...state.items,
          {
            ...action.payload,
            quantity: 1,
          },
        ];
      }

      // Recalculate derived values
      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
        totalItems: updatedItems.reduce(
          (total, item) => total + item.quantity,
          0
        ),
      };
    }

    /* -------- REMOVE ITEM -------- */
    case REMOVE_ITEM: {
      // Remove item by id
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        items: filteredItems,
        totalAmount: filteredItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
        totalItems: filteredItems.reduce(
          (total, item) => total + item.quantity,
          0
        ),
      };
    }

    /* -------- UPDATE QUANTITY -------- */
    case UPDATE_QUANTITY: {
      // If quantity becomes 0, reuse REMOVE_ITEM logic
      if (action.payload.quantity === 0) {
        return reducer(state, {
          type: REMOVE_ITEM,
          payload: { id: action.payload.id },
        });
      }

      // Update quantity immutably
      const updatedQuantityItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

      return {
        ...state,
        items: updatedQuantityItems,
        totalAmount: updatedQuantityItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
        totalItems: updatedQuantityItems.reduce(
          (total, item) => total + item.quantity,
          0
        ),
      };
    }

    /* -------- CLEAR CART -------- */
    case CLEAR_CART:
      // Reset state completely
      return initialState;

    /* -------- DEFAULT -------- */
    default:
      return state;
  }
};

/* =========================
   COMPONENT
   ========================= */
export const ShoppingCartWithReducer = () => {

  // useReducer gives us state + dispatch
  const [state, dispatch] = useReducer(reducer, initialState);

  // Static product list (not state)
  const products = [
    { id: 1, name: "React Course", price: 49.99 },
    { id: 2, name: "Node.js Course", price: 39.99 },
    { id: 3, name: "JavaScript Bundle", price: 89.99 },
  ];

  return (
    <div>

      {/* PRODUCT LIST */}
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>
            {product.name} - ${product.price}
          </h3>

          {/* Dispatch ADD_ITEM action */}
          <button
            onClick={() =>
              dispatch({
                type: ADD_ITEM,
                payload: product,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}

      {/* CART SECTION */}
      <div>
        <h2>Shopping Cart</h2>

        {/* Conditional rendering */}
        {state.items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {state.items.map((item) => (
              <div key={item.id}>
                <p>
                  {item.name} - ${item.price} x {item.quantity}
                </p>

                {/* Decrease quantity */}
                <button
                  onClick={() =>
                    dispatch({
                      type: UPDATE_QUANTITY,
                      payload: {
                        id: item.id,
                        quantity: item.quantity - 1,
                      },
                    })
                  }
                >
                  -
                </button>

                {/* Increase quantity */}
                <button
                  onClick={() =>
                    dispatch({
                      type: UPDATE_QUANTITY,
                      payload: {
                        id: item.id,
                        quantity: item.quantity + 1,
                      },
                    })
                  }
                >
                  +
                </button>

                {/* Remove item */}
                <button
                  onClick={() =>
                    dispatch({
                      type: REMOVE_ITEM,
                      payload: { id: item.id },
                    })
                  }
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Derived state */}
            <h3>Total Items: {state.totalItems}</h3>
            <h3>Total Amount: ${state.totalAmount.toFixed(2)}</h3>

            {/* Clear cart */}
            <button onClick={() => dispatch({ type: CLEAR_CART })}>
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

