/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

import '../assets/Counter.css'

const Count = () => {

    const [counter, setCounter] = React.useState(0)

    const increaseCount = () =>{
      setCounter(counter + 1)
    }

    const decreaseCount = () =>{
      setCounter(counter - 1)
    }
  return (
    <div>
      
      <h1 class="counter" counter-testid="counter" >
        {counter}
      </h1>
      <div class="controls">
        <button onClick={increaseCount}>Increment</button>
        <button onClick={decreaseCount}>Decrement</button>
      </div>
    </div>
  )
}

export default Count