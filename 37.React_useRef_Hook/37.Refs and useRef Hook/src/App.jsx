
import { useState } from 'react'
import './App.css'
import StopWatch from './StopWatch'
import FocusInput from './FocusInput'


function App() {

  
  return (
   <>
    <StopWatch />
    <FocusInput />
   </>
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