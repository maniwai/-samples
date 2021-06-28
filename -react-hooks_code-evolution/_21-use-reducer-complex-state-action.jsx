import React, { useReducer } from 'react'


const initialState = 0

const reducer = (currentState, action) => {
  switch (action) {
    case 'increment':
      return currentState + 1

    case 'decrement':
      return currentState - 1

    case 'reset':
      return initialState

    default:
      return currentState
  }
}

const Demo = () => {
  // note: alternative to file 20 using multiple reducer
  const [newState1, dispatch1] = useReducer(reducer, initialState)
  const [newState2, dispatch2] = useReducer(reducer, initialState)
  
  return (
    <div>
      <div>Counter 1 - {newState1}</div>
      <button onClick={() => dispatch1('increment')}>Increment</button>
      <button onClick={() => dispatch1('decrement')}>Decrement</button>
      <button onClick={() => dispatch1('reset')}>Reset</button>
      <div>Counter 2 - {newState2}</div>
      <button onClick={() => dispatch2('increment')}>Increment</button>
      <button onClick={() => dispatch2('decrement')}>Decrement</button>
      <button onClick={() => dispatch2('reset')}>Reset</button>
    </div>
  )
}

export default Demo
