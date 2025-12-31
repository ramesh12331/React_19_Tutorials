import React, { Children, useState } from 'react'
import { UserContext } from './UserContext'

// Provider component that HOLDS the shared state
const UserContextProvider = ({children}) => {
      // Shared global state
    const [user, setUser] = useState({
                                        name : "Bruce Wayne",
                                        role : "admin",
                                        theme : "dark",
                                        })
  return (
    // ❗ IMPORTANT:
    // Always use UserContext.Provider
    <UserContext value={{user, setUser}}>
      {children}
    </UserContext>
  )
}

export default UserContextProvider
