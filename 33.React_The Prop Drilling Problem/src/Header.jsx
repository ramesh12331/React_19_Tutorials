import React from 'react'
import NavigationBar from './NavigationBar'

// Header receives user via props
// It does NOT use user itself
const Header = ({user}) => {
  return (
    <div>
      <h2>Header</h2>
      {/* Passing user down again */}
        <NavigationBar user={user}/>
    </div>
  )
}

export default Header
