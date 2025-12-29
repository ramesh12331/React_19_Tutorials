
import './App.css'
import CardWrapper from './CardWrapper'
import Greeting from './Greeting'
import UserCard from './UserCard'

function App() {
  
  return (
    <>
      <Greeting name="Bruce" message="Good morning"/>
      <Greeting name="Clark"/>
      <Greeting message='Welcome'/>
      <Greeting/>
      <UserCard/>
      <CardWrapper>
        <p>Bruce Wayne</p>
        <p>batman@gmail.com</p>
        <button>Edit Profile</button>
      </CardWrapper>
    </>
  )
}

export default App
