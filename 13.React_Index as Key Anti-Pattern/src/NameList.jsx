import React from 'react'

// NameList is a functional React component
const NameList = () => {
    // Array of names to be displayed
    const names = ["Bruce", "Clark", "Diana","Bruce"];

    // Use map() to transform each name into an <h2> element
    // index is used as the key (acceptable here because the list is static)
    const nameList = names.map((name,index)=><h2 key={index}>{index} {name}</h2>)

    // Render the list of names
  return (
    <div>
        
      {nameList}
    </div>
  )
}

// Export component so it can be used in other files
export default NameList
