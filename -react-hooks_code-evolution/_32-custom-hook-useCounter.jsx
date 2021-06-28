import React, { useState } from 'react'

function useXxCounter(initialCount = 0) {
  const [newState, setCount] = useState(initialCount)

  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }
  const decrement = () => {
    setCount((prevCount) => prevCount - 1)
  }
  const reset = () => {
    setCount(0)
  }
  // note: we export state and method to an array
  return [newState, increment, decrement, reset]
}

const Demo = () => {
  // note: we destructure the array and set the initial state to 10
  const [newState, increment, decrement, reset] = useXxCounter(10)
  return (
    <div>
      <div>Count - {newState}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Demo
