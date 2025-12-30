import React, { useState } from 'react'

const TodoList = () => {
    // State is an ARRAY of objects
    // Each item represents a todo
    const [items, setItems] = useState([
        {id:1, text: "Learn React", done:false},
        {id:2, text: "Built an app", done:false},
    ]);

     // Runs on every render
    console.log("Rendering with items", items)

     // Add a new todo item
    const addItem = () => {
         // New item object
        const newItem = {
            id : Date.now(), // unique id
            text : "Deploy to production",
            done:false
        };

        // ❌ WRONG (mutates state directly)
        // items.push(newItem)

        // ✅ Correct (create a NEW array)
        // setItems([...items, newItem])

         // Another correct immutable way
        setItems(items.concat(newItem))
    }

    // Remove an item by id
    const removeItem = (id) =>{
        // filter creates a NEW array
        // keeps all items except the one to remove
        setItems(items.filter((item)=>item.id !== id))
    }

    // Toggle "done" status
    const toggleDone = (id) =>{
        // map returns a NEW array
        // update only the matching item
        setItems(items.map((item)=>{
            if(item.id === id){
                 // Return a NEW object with updated value
                return {...item, done: !item.done};
            }

             // Return unchanged items as-is
            return item;
        }))
    }
  return (
    <div>
      <ul>
        {/* Render each todo item */}
        {items.map((item)=>{
            return <li key={item.id}>
                        {/* Conditional styling based on state */}
                       <span style={{textDecoration: item.done ? "line-through" : "none"}}>{item.text}</span> 
                        {/* Toggle done / undo */}
                        <button onClick={()=>toggleDone(item.id)}>{item.done ? "Undo" : "Done"}</button>
                        {/* Remove item */}
                        <button onClick={()=>removeItem(item.id)}>Delete</button>
                    </li>
        })}
      </ul>
       {/* Add new item */}
      <button onClick={addItem}>Add Item</button>
    </div>
  )
}

export default TodoList


// Arrays in React state must be updated IMMUTABLY
// Use concat / spread to add items
// Use filter to remove items
// Use map to update a specific item
// Never mutate state directly

// When working with arrays in React state,
// always return a new array using map, filter, or concat.