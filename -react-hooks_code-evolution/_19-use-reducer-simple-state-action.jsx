import React, { useReducer } from 'react'

// note: useReducer is a hook used for state management in React
// note: useReducer is an alternative to useState (useState is built using useReducer, so useReducer is a more primitive hook)

// note: [newState, dispatch] = useReducer(reducer, initialState)

// note: step 2 - define initial state
const initialState = 0

// note: step 3 - define the reducer function (return 1 value witch is the new state    )
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
  // step 1 -
  const [newState, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <div>Count - {newState}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default Demo
