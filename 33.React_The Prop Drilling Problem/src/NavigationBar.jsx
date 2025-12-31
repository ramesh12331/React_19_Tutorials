import React from 'react'
import UserMenu from './UserMenu'

// NavigationBar receives user
// Still does NOT use it directly
const NavigationBar = ({user}) => {
  return (
    <div>
      <h2>Nav Bar</h2>
       {/* Passing user further down */}
      <UserMenu user={user}/>
    </div>
  )
}

export default NavigationBar
