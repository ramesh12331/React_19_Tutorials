
import Alert from './Alert'
import './App.css'
import NewButton from './NewButton'


function App() {
  
  return (
    <>
      <Alert>
        Your changes have been saved!
      </Alert>
      <Alert type='error'>
        Something went wrong!
      </Alert>
      <NewButton/>
    </>
  )
}

export default App
