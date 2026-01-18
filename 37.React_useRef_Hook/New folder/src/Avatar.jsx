import React, {  useContext } from 'react'
import { UserContext } from './UserContext'

const Avatar = ({isLoading = true}) => {
  // ❌ EARLY RETURN BEFORE HOOK
  if(isLoading){
    return <div>Loading user data...</div>
  }
   // ❌ Hook is called conditionally → NOT ALLOWED
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


// Hooks MUST be called:
// - at the top level
// - on every render
// - in the same order