import React from 'react'

// Count is a functional component
const Count = () => {
     // Normal JavaScript variable (NOT React state)
    let count = 0;

     // This runs when the component renders
    console.log("Counter component render");

    // Click handler
    const handleClick = () =>{
        // Incrementing a normal variable
        count = count + 1;

        // Value updates in console only
        console.log(count)
    }
  return (
    <div>
        {/* Button displays count value */}
      <button onClick={handleClick}>Count: {count}</button>
    </div>
  )
}

export default Count
