import React from 'react'
import MenuItem from './MenuItem'

// Menu component (parent)
const Menu = () => {
    // Handles order details from MenuItem
    const handlOrder = (itemName, itemPrice) => {
        alert(`Your Order: ${itemName} for ${itemPrice}`);
    }
  return (
    <div>
      <h2>Our Menu</h2>
      <MenuItem name = "Pizza" price={12} onOrder={handlOrder} />
      <MenuItem name = "Burger" price={8} onOrder={handlOrder} />
      <MenuItem name = "Salad" price={6} onOrder={handlOrder} />
    </div>
  )
}

export default Menu
