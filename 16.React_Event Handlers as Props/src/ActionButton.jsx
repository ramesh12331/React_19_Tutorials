import React from 'react'

// ActionButton is a reusable button component
// Props:
// - text → label shown on the button
// - onClick → function executed when button is clicked
const ActionButton = ({text,onClick}) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

export default ActionButton
