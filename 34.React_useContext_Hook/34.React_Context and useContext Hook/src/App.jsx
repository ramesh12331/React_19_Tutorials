
import './App.css'
import Header from './Header'
import { UserContext } from './UserContext'

function App() {

   // User data we want to share across components
  const user = {
    name : "Bruce Wayne",
    role : "admin",
    theme : "dark",
  }
  return (
    // ❗ UserContext.Provider makes `user` available
    // to ALL child components
    <UserContext value={user}>
   <div>
      <h1>Dashboard</h1>
      <Header />
   </div>
   </UserContext>
  )
}

export default App
