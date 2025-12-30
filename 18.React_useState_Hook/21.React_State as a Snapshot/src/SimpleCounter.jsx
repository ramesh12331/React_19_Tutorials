import React, { useState } from 'react'

// SimpleCounter component
const SimpleCounter = () => {
    
    // React state
  // `count` is a SNAPSHOT of state for the current render
    const [count, setCount] = useState(0);

    // Runs on every render
    console.log("render phase: Component rendering with count = ", count);

    // Click handler
    const handleClick = () =>{
        // ❗ IMPORTANT:
        // `count` here is FIXED for this render (snapshot)
        // It will NOT change inside this function

        // Schedules update using snapshot value
        setCount(count+1);
        console.log("After setCount(count+1), count is: ",count);// old value

        // Still uses the SAME snapshot
        setCount(count+5);
        console.log("After setCount(count+5), count is: ",count);// old value

        // Again uses the SAME snapshot
        setCount(count+10);
        console.log("After setCount(count+10), count is: ",count); // old value

        // Closure captures the SAME snapshot
        setTimeout(()=>{
          console.log("After 2 seconds, count is:", count); // old value
        },2000)
    }
  return (
    <div>
       {/* UI updates ONLY after React re-renders */}
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default SimpleCounter


// ***********CORRECT VERSION (Functional Updates – Recommended)**********************

// import React, { useState } from 'react'

// const SimpleCounter = () => {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {

//     // ✅ Functional updates
//     // Each update receives the LATEST state value
//     setCount(prev => prev + 1);
//     setCount(prev => prev + 5);
//     setCount(prev => prev + 10);

//     // Final result after re-render:
//     // 0 → 1 → 6 → 16
//   };

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={handleClick}>Increment</button>
//     </div>
//   );
// };

// export default SimpleCounter;


// State is a snapshot for a render.
// setState schedules the NEXT render.
// Use functional updates when new state depends on old state.
