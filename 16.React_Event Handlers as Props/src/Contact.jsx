import React from 'react'
import ActionButton from './ActionButton'

// Contact component
const Contact = () => {

     // Function executed when button is clicked
    const handleSendMessage = () =>{
        alert("Send your message");
    }
  return (
    <div>
      <h2>Contact Us</h2>
      {/* Reusing ActionButton */}
      <ActionButton text="Send Message" onClick={handleSendMessage}/>
    </div>
  )
}

export default Contact
