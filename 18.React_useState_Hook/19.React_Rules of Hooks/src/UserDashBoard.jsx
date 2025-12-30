import React, { useState } from 'react'

    // UserDashBoard component
    // Receives isPremium as a prop
const UserDashBoard = ({isPremium}) => {
    // ✅ Hook is called at the TOP LEVEL
    // Initial credits set to 100
    const [credits, setCredits] = useState(100);

    // Conditional rendering based on props
    // ❗ This is SAFE because hooks are already called
    if(!isPremium){
        return <div>Upgrade to premium to see credits</div>
    }
  return (
    <div>
      <p>You have {credits} credits</p>
      {/* Updates state when clicked */}
      <button onClick={()=>setCredits(0)}>Spend All Credits</button>
    </div>
  )
}

export default UserDashBoard
