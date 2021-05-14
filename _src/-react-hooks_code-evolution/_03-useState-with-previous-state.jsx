import React, { useState } from 'react'

// note: anytime we need to udpate the state based on the previous state
// note: we need to access the previous state from setCount(prevState => prevState + 1)
function UseState() {
  const intitialCount = 0
  const [count, setCount] = useState(intitialCount)

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1)
    }
  }
  return (
    <div>
      count: {count}
      <button onClick={() => setCount(intitialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default UseState
