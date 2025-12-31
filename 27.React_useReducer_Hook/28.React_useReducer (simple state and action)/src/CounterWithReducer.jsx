import React, { useReducer } from 'react'

// Initial state for the counter
const initialState = 0;

// Reducer function
// It receives:
// 1. current state
// 2. action describing WHAT happened
const reducer = (state, action) =>{
    // Decide next state based on action
    switch (action) {
        case "increment":
            // Increase state by 1
            return state+1;

        case "decrement":
            // Decrease state by 1
            return state-1;

        case "reset":
            // Reset state back to initial value
            return initialState;

        default:
             // Always return current state if action is unknown
            return state;
    }
}

// Counter component using useReducer
const CounterWithReducer = () => {

    // useReducer returns:
    // 1. current state (count)
    // 2. dispatch function to send actions
   const [count, dispatch] = useReducer(reducer,initialState);
  return (
    <div>
        {/* Display current state */}
      <p>Count : {count}</p>
      {/* Dispatch actions instead of setting state directly */}
      <button onClick={()=>dispatch("increment")}>Increment</button>
      <button onClick={()=>dispatch("decrement")}>Decrement</button>
      <button onClick={()=>dispatch("reset")}>Reset</button>
    </div>
  )
}

export default CounterWithReducer


// useReducer is an alternative to useState
// State updates are centralized in a reducer function
// dispatch() sends an action describing what happened
// reducer decides how state should change

// useReducer is preferred when state logic is complex
// or when multiple actions modify the same state.