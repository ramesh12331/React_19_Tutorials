import React from 'react'
import Avatar from './Avatar'

// UserMenu receives user
// Still does NOT need it directly
const UserMenu = ({user}) => {
  return (
    <div>
      <h4>User Menu</h4>
      {/* Passing user to the component that finally needs it */}
      <Avatar user={user}/>
    </div>
  )
}

export default UserMenu
