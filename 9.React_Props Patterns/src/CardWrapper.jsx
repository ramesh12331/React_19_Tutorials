import React from 'react'

const CardWrapper = ({title,children}) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <h1> Nested content goes here</h1>
       <div>
        {children}
       </div>
    </div>
    </div>
  )
}

export default CardWrapper
