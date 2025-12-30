import React, { useState } from 'react'

const UserProfile = () => {
    // State is an OBJECT
    // React does NOT merge objects automatically (unlike class components)
    const [user, setUser] = useState({
        name : "Bruce Wayne",
        age : 30,
        email : "bruceway@gmail.com",
        address: {
            city : "Gotham City",
            country : "USA",
        }
    })

     // Runs on every render
    console.log("Component rendering, user", user)

    // ❌ WRONG WAY (commented out)
    // This would REMOVE age, email, and address

    // const updateName = () =>{
    //     setUser({
    //         name: "Clark Kent"
    //     })
    // }


    // ✅ Correct way: copy existing state using spread operator
    const updateName = () =>{
        setUser({
            ...user,  // copy all existing properties
            name: "Clark Kent" // overwrite only name
        })
    }

     // Update a single primitive value (age)
    const updateAge = () =>{
        setUser({
            ...user,
            age:user.age+1,  // use existing value
        })
    }

     // Update multiple properties at once
    const updateMultiple = () =>{
        setUser({
            ...user,
            name: "Clark Kent",
            age: 31
        })
    }

     // Updating NESTED state (address object)
    const updateCity = () =>{
        setUser({
            ...user,  // copy user object
            address:{
                ...user.address, // copy nested address object
                city:"Metropolis",  // update only city
            }
        })
    }
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
      <p>Country: {user.address.country}</p>
      <button onClick={updateName}>Change name</button>
      <button onClick={updateAge}>Increase age by 1</button>
      <button onClick={updateMultiple}>Update name and age</button>
      <button onClick={updateCity}>Move to Metropolis</button>
    </div>
  )
}

export default UserProfile


// React state must be updated IMMUTABLY
// Objects are NOT merged automatically
// Always copy existing state using spread (...)
// Nested objects require nested spreading