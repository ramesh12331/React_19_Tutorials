
import { useState } from 'react'
import './App.css'
import Header from './Header'
import UserContextProvider from './UserContextProvider'


function App() {

  
  return (
    // Wrap entire app with Provider
    <UserContextProvider>
   <div>
      <h1>Dashboard</h1>
      <Header />
   </div>
   </UserContextProvider>
  )
}

export default App

// Context stores GLOBAL state
// Provider OWNS the state
// useContext CONSUMES state anywhere
// State updates in context re-render ALL consumers
// Context avoids prop drilling


// React Context allows sharing both state and updater
// across the component tree without passing props.