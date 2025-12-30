
import './App.css'
import Product from './Product'
import Welcome from './Welcome'

function App() {

  return (
    <>
      <Product title="Gaming laptop" price = {129.99} inStock = {true} categories = {["Electronics","Computers","Gaming"]}/>
      <Welcome name="Bruce" alias="Batman"/>
      <Welcome name="Clark" alias="Superman"/>
      <Welcome name="Diana" alias="Wonder Women"/>
    </>
  )
}

export default App
