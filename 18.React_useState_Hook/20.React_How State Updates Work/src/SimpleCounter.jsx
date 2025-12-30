import React, { useState } from 'react'

// SimpleCounter component
const SimpleCounter = () => {
    // Runs on every render
    console.log("SimpleCounter component render!");
    // React state
    const [count, setCount] = useState(0);

    // Click handler
    const handleClick = () =>{
        console.log("Before setCount, count is: ",count);
        // Requesting a state update (NOT immediate)
        setCount(count+1);
        // This still logs the OLD value
        console.log("After setCount, count is: ",count);
    }
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default SimpleCounter
