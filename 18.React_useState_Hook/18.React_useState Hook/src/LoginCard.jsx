import React, { useState } from 'react'

// LoginCard demonstrates boolean state and controlled inputs
const LoginCard = () => {
     // Boolean state for login status
    const [isLoggIn, setIsLogin] = useState(false);
     // State for input field
    const [message, setMessage] = useState("")

     // Toggle login / logout
    const handleLogin = () =>{
        setIsLogin(!isLoggIn)
    }

    // Handle input changes (controlled component)
    const handlChange = (event) =>{
        setMessage(event.target.value)
    }
  return (
    <div>
        {/* Conditional rendering based on state */}
      <button onClick={handleLogin}>{isLoggIn ? "Logout" : "Login"}</button>
      <div>
        <input type="text" placeholder='Type a message' value={message} onChange={handlChange} />
        {/* Display typed message */}
        <h1>{message}</h1>
      </div>
    </div>
  )
}

export default LoginCard
