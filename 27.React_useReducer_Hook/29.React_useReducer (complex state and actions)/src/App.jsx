
import './App.css'
import {ShoppingCartWithReducer} from './ShoppingCartWithReducer'

// Root component
function App() {
  
  return (
    <>
     <h1>Codevolution React Course</h1>
      <ShoppingCartWithReducer/>
    </>
  )
}

export default App


// useReducer centralizes complex state logic
// Reducer must be PURE (no mutations, no side effects)
// Derived values should be calculated, not stored separately
// dispatch(action) describes WHAT happened
// reducer decides HOW state changes


// useReducer is ideal for complex state with multiple actions,
// similar to Redux but built into React.