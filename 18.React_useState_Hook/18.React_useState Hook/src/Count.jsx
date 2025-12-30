import React, { useState } from 'react'

// Count component demonstrates useState with lazy initialization
const Count = () => {
  // Lazy initialization:
  // The function runs ONLY on the first render
  const [count, setCount] = useState(()=>{
    console.log("Initial state function called");
    return 0;
  });
  // currentValue, setterFunction = useState(fn)


  // const [count, setCount] = useState(0);
  // currentValue, setterFunction = useState(intialvalue)


   // Logs on every re-render
  console.log("Counter component rendered with count:", count);

   // Click handler updates state
  const handleClick = () => {
    setCount(count+1)// triggers re-render
  }
  return (
    <div>
      <button onClick={handleClick}>Count: {count}</button>
    </div>
  )
}

export default Count
