import React, { useState } from 'react'

// note: for complex state use useReducer instead

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* // note: unsafe  */}
      {/* <button onClick={() => setCount(count + 1)}>count {count}</button> */}
      {/* // note: safe  */}
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        count {count}
      </button>
    </div>
  )
}

export default Counter
