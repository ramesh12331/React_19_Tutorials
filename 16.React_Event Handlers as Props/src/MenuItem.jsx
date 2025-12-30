import React from 'react'

// MenuItem represents a single menu item
// Props:
// - name → item name
// - price → item price
// - onOrder → callback function from parent
const MenuItem = ({name, price, onOrder}) => {
  return (
    <div>
      <span>{name} - ${price}</span>
       {/* Pass data back to parent */}
      <button onClick={()=>onOrder(name, price)}>Order</button>
    </div>
  )
}

export default MenuItem
