import React from 'react';
import "./App.css";

function Welcome() {
  return <h1>Welcome, Vishwas!</h1>
}

function Button() {
  return <button>Click me</button>
}

const App = () => {
  return (
    <div>
      <h1>Code Evolution React Course</h1>
      <Welcome/>
      <Button/>
    </div>
  )
}

export default App
