import React from 'react'

// DynamicCustomButton is a reusable button component
// It receives button text as a prop
const DynamicCustomButton = ({text}) => {
    const name = "Codevolution";

    // Click handler using props and variables
    const handleClick = () =>{
        console.log(`Hey ${name}, you cliked ${text}`)
    }
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

export default DynamicCustomButton
