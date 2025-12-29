import React from 'react'
//Default props
const Greeting = ({name="Guest", message="Hello"}) => {
  return (
    <div>
      <h1>{message}, {name}</h1>
    </div>
  )
}

export default Greeting
