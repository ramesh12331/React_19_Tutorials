import React from 'react'

// Destruture the props
const Product = ({title, price, inStock, categories}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <p>In stock: {inStock ? "YES" : "NO"}</p>
      <p>Categories: {categories.join(",")}</p>
    </div>
  )
}

export default Product
