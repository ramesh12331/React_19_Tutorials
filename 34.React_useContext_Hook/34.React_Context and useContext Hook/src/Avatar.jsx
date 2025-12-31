import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const Avatar = () => {
   // useContext reads the nearest Provider's value
  const user = useContext(UserContext)
  return (
    <div>
      <h4>Avatar</h4>
      {/* Access shared data without props */}
      <h3>{user.name}</h3>
    </div>
  )
}

export default Avatar
