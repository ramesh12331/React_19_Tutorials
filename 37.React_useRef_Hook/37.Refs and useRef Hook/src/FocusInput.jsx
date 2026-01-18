import React, { useRef } from 'react'

const FocusInput = () => {
    const InputRef = useRef(null)

    const handleInputFocus = () =>{
        InputRef.current.focus()
    }
  return (
    <div>
      <input ref={InputRef} type="text" placeholder='Enter Your Name' />
      <button onClick={handleInputFocus}>Focus Input</button>
    </div>
  )
}

export default FocusInput
