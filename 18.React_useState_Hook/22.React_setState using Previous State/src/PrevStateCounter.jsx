import React, { useState } from 'react'

// PrevStateCounter demonstrates using PREVIOUS STATE correctly
const PrevStateCounter = () => {
    // React state
    const [count, setCount] = useState(0);

     // Runs on every render
    console.log("render phase: Component rendering with count = ", count);
    // Click handler
    const handleClick = () =>{
        // ✅ Functional update #1
        // React passes the LATEST state value to `prev`
        setCount((prev)=>{
            console.log("First updater fn: prev count = ", prev);
            return prev+1;
        });
       
        // ✅ Functional update #2
        // `prev` is UPDATED value from previous updater
        setCount((prev)=>{
            console.log("Second updater fn: prev count = ", prev);
            return prev+5;
        });
        
        // ✅ Functional update #3
        // Again receives the latest updated state
        setCount((prev)=>{
            console.log("Third updater fn: prev count = ", prev);
            return prev+10;
        });
        
        // Final calculation (starting from 0):
        // 0 → 1 → 6 → 16
    }
  return (
    <div>
       {/* UI updates after React re-renders */}
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default PrevStateCounter


// Functional updates do NOT use a snapshot
// Each updater function receives the latest state
// This is why multiple setCount calls work correctly