// import React from 'react'
// import UserInfo from './UserInfo'

// const UserCard = (props) => {
//   return (
//     <div>
//       <h2>User Details</h2>
//       <UserInfo {...props}/>
//     </div>
//   )
// }

// export default UserCard

// *************OR*****************

import React from 'react'
import UserInfo from './UserInfo'
//Forwarding props with spread operator
const UserCard = ({id, ...rest}) => {
  return (
    <div>
      <h2>User {id} Details</h2>
      <UserInfo {...rest}/>
    </div>
  )
}

export default UserCard

