

import './App.css'
import CustomButton from './CustomButton'
import DynamicCustomButton from './DynamicCustomButton'

// Root component
function App() {
  
  return (
    <>

    {/* Static buttons */}
     <CustomButton/>

     {/* Dynamic reusable buttons */}
     <DynamicCustomButton text="Like"/>
     <DynamicCustomButton text="Book mark"/>
    </>
  )
}

export default App
