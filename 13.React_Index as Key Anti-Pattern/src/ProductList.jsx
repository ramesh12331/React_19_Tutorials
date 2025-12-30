// import React from 'react'

// const ProductList = () => {
//   return (
//     <div>
//         {/* Basic Product List */}
//       <h2>Our Products</h2>
//       <div>
//         <h3>Laptop</h3>
//         <p>Price: $999</p>
//       </div>
//       <div>
//         <h3>Phone</h3>
//         <p>Price: $699</p>
//       </div>
//       <div>
//         <h3>Tablet</h3>
//         <p>Price: $499</p>
//       </div>
//     </div>
//   )
// }

// export default ProductList



// ***********MAP LISTING*************

import React from 'react'

// ProductList is a functional React component
const ProductList = () => {

    // Static list of products (mock data)
    const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 699 },
    { id: 3, name: "Tablet", price: 499 },
    { id: 4, name: "Watch", price: 299 },
    { id: 5, name: "Headphones", price: 199 },
  ];

  // Filter products that cost more than $500
  // Then map them into JSX elements
  const productElements = products
  .filter((product)=>{
    // Keep only products with price greater than 500
    return product.price > 500;
  })
  .map((product)=>{
    // Convert each product object into JSX
    return (
        <React.Fragment key={product.id}>
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
        </div>
        </React.Fragment>
    )
  })


   // Component UI output
  return (
    <div>
        {/* Heading for product list */}
      <h2>Our Products</h2>
      {/* Render filtered product elements */}
      {productElements}
    </div>
  )
}

export default ProductList
