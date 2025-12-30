import React from 'react'

const Welcome = (props) => {
    console.log(props)
  return (
    <div>
      <h1>Welcome ,{props.name}! a.k.a {props.alias}</h1>
    </div>
  )
}

export default Welcome
