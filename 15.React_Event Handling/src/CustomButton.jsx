import React from 'react'

// CustomButton demonstrates different ways of handling click events
const CustomButton = () => {

    // Simple click handler
    const handleClick = () =>{
        alert("Thanks for liking!");
    }

      // Event handler that receives the event object
    const handleEvent = (e) =>{
        console.log("Clicked element", e.target);  // Element clicked
        console.log("Click coordinates", e.clientX, e.clientY); // Mouse position
        console.log("Which mouse button?", e.button); // Mouse button used
    }
  return (
    <div>
    {/* Calls a named function */}
      <button onClick={handleClick}>Like</button>

      {/* Inline arrow function */}
      <button onClick={()=>alert("Successfully Submitted!")}>Submit</button>

      {/* Accessing event object */}
      <button onClick={handleEvent}>Event Button</button>
    </div>
  )
}

export default CustomButton
