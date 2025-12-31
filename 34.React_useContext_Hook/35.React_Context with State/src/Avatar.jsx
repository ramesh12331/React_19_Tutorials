import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const Avatar = () => {
   // Consume BOTH state and updater from context
  const {user, setUser} = useContext(UserContext);

  // Toggle theme using IMMUTABLE update
  const toggleTheme = () =>{
    setUser({
      ...user,
      theme: user.theme === "dark" ? "light" : "dark",
    })
  }
  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <p>Current theme: {user.theme}</p>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  )
}

export default Avatar
