import React from 'react'

// Avatar is the ONLY component that actually uses user
const Avatar = ({user}) => {
  return (
    <div>
      <h4>Avatar</h4>
      <h3>{user.name}</h3>
    </div>
  )
}

export default Avatar


// This is called PROP DRILLING
// Data is passed through multiple components
// Many components receive props they don't use
// Makes code harder to maintain and refactor

// Prop drilling happens when data is passed through
// intermediate components that don't need it.