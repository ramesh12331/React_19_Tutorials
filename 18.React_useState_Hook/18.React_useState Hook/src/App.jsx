

import './App.css'
import Count from './Count'
import LoginCard from './LoginCard'


// Root component
function App() {
  
  return (
    <>
     <h1>Codevolution React Course</h1>
     {/* Each Count has its own state */}
     <Count/>
     <Count/>
     <LoginCard/>
    </>
  )
}

export default App
