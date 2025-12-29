// import React from 'react'

// const UserDetails = ({name, isOnline, hideOffline}) => {
//     if(hideOffline && !isOnline){
//         return null;
//     }

//   if(isOnline) {
//     return (
//         <div>
//             <h3>{name}</h3>
//             <span>🟢 Online</span>
//             <p>Available for chat</p>
//             <button>Send Message</button>
//         </div>
//     );
//   }

//   return(
//     <div>
//         <h3>{name}</h3>
//         <span>Offline</span>
//         <p>Not Available</p>
//         <small>Check back later</small>
//     </div>
//   )
// }

// export default UserDetails

// ************TERNARY*****************
import React from 'react'

    // Destructure props directly in the function parameters
const UserDetails = ({name, isOnline, hideOffline, isPremium, isNewUser,role}) => {

    // If hideOffline is true AND user is offline,
    // do not render anything
    if(hideOffline && !isOnline){
        return null;
    }
    
    // Variable to store role badge JSX
    let roleBadge = null;

    // Determine which role badge to show
    if(role === "admin"){
        roleBadge = <span> 🔑 Admin</span>
    }else if(role === "moderator"){
        roleBadge = <span> 🎓 Moderator</span>
    }else if(role === "vip"){
        roleBadge = <span>💎 VIP</span>
    }

  return (
    <div>
        <h3>
            {/* User name */}
            {name}

            {/* Premium badge */}
            {isPremium && <span> ⭐</span>}
            {/* New user badge */}
            {isNewUser && <span> 🎉</span>}
            {/* Role badge */}
            {roleBadge}
        </h3>

        {/* Online / Offline status */}
        <span>{isOnline ? "🟢 Online" : "Offline"}</span>

        {/* Availability message */}
        <p>{isOnline ? "Available for Chat" : "Not Available"}</p>

        {/* Conditional rendering based on online status */}
        {
            isOnline ? (
                <button>Send Message</button>
            ) :
            (
                <small>Check back later</small>
            )
        }
    </div>
  )
}

export default UserDetails

