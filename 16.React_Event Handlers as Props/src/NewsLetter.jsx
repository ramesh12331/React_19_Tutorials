import React from 'react'
import ActionButton from './ActionButton'

// NewsLetter component
const NewsLetter = () => {
    // Subscribe handler
    const handleSubscribe = () =>{
        alert("Thank you for subscribing!")
    }
  return (
    <div>
      <h2>Subscribe to Newsletter</h2>
      {/* Same ActionButton, different behavior */}
      <ActionButton text="Subscribe" onClick={handleSubscribe}/>
    </div>
  )
}

export default NewsLetter
