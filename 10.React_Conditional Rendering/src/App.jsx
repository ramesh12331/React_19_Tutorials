
import './App.css'
import UserDetails from './UserDetails'

function App() {
  
  return (
    <>
      {/* Online admin user with all badges */}
      <UserDetails name="Bruce Wayne" isOnline={true} isPremium={true} isNewUser={true} role="admin"/>

      {/* Offline VIP user hidden because hideOffline is true */}
      <UserDetails name="Clark Kent" isOnline={false} hideOffline={true} role="vip"/>
    </>
  )
}

export default App
