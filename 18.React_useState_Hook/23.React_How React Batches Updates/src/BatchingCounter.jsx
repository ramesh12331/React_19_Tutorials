import React, { useState } from 'react'

// BatchingCounter demonstrates HOW React batches multiple state updates
const BatchingCounter = () => {
    // Multiple pieces of state
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [isActive, setIsActive] = useState(false)

    // Runs on EVERY render
    // Even though we call multiple setState functions,
    // this log will run ONLY ONCE per click
    console.log("Render phase: Component rendering ");
    // Click handler
    const handleClick = () =>{
        // ✅ Functional updates for count
        // All these updates will be BATCHED by React
        setCount((prev)=>{
           
            return prev+1;
        });
       
       
        setCount((prev)=>{
            
            return prev+5;
        });
        
      
        setCount((prev)=>{
            return prev+10;
        });
        
        // ✅ Updating other state values
        // These updates are ALSO batched
        setName("Updated")

        setIsActive(true)
    }
  return (
    <div>
      {/* UI updates only AFTER React re-renders */}
      <h2>Count: {count}</h2>
      <p>Name: {name}</p>
      <p>Active: {isActive ? "Yes" : "No"}</p>
      <button onClick={handleClick}>Update all three</button>
    </div>
  )
}

export default BatchingCounter


// React batches multiple state updates into ONE render
// This improves performance
// Functional updates ensure correct state calculation