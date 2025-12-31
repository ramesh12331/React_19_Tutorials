import { useReducer } from "react";

/* =====================================
   LAZY INITIALIZER (like useState)
   ===================================== */
// This function runs ONLY ONCE during initial render
// It supports both values and functions
const init = (initial) => {

  // If initial value is a function (lazy init)
  if (typeof initial === "function") {
    return initial(); // call it once
  }

  // Otherwise return the value directly
  return initial;
};

/* =====================================
   CUSTOM useState IMPLEMENTATION
   ===================================== */
const useStateCustom = (initialValue) => {

  // Reducer controls how state updates
  const reducer = (state, action) => {

    // If setState receives a function
    // behave like React's functional update
    if (typeof action === "function") {
      return action(state);
    }

    // Otherwise, replace state directly
    return action;
  };

  // useReducer powers our custom useState
  // - reducer handles updates
  // - init handles lazy initialization
  const [state, dispatch] = useReducer(
    reducer,
    initialValue,
    init
  );

  // setState API (same as React's useState)
  const setState = (newValue) => {
    dispatch(newValue);
  };

  // Return same API as useState
  return [state, setState];
};

/* =====================================
   COMPONENT USING CUSTOM HOOK
   ===================================== */
export const CustomCounter = () => {

  // Using our custom useState
  const [count, setCount] = useStateCustom(0);

  // Example of expensive lazy initialization
  /*
  const [data, setData] = useStateCustom(() => {
    console.log("Expensive initialization!");
    return Array(100).fill(0);
  });
  */

  return (
    <div>
      {/* Display state */}
      <p>Count: {count}</p>

      {/* Direct value updates */}
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      {/* Functional update */}
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment with function
      </button>
    </div>
  );
};



// useState can be implemented using useReducer
// Reducer replaces or transforms state
// Lazy initialization runs only once
// Functional updates prevent stale state bugs
// Custom hooks can replicate built-in hooks

// useState is built on top of useReducer internally,
// and both support lazy initialization and functional updates.