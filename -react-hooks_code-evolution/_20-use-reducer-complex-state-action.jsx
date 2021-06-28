import React, { useReducer } from 'react'

// note: now initial state is an object
const initialState = {
  firstCounter: 0,
  // note: now we store 2 different counters
  secondCounter: 10,
}

const reducer = (currentState, action) => {
  // note: now action is also an object
  switch (action.type) {
    case 'increment':
      // note: now we access the parameter `value` from `action`
      // note: because we return an object, we need to merge previous values with the spread operator
      return {
        ...currentState,
        firstCounter: currentState.firstCounter + action.value,
      }

    case 'decrement':
      return {
        ...currentState,
        firstCounter: currentState.firstCounter - action.value,
      }
    case 'increment2':
      return {
        ...currentState,
        secondCounter: currentState.secondCounter + action.value,
      }

    case 'decrement2':
      return {
        ...currentState,
        secondCounter: currentState.secondCounter - action.value,
      }

    case 'reset':
      return initialState

    default:
      return currentState
  }
}

const Demo = () => {
  const [newState, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <div>First Counter - {newState.firstCounter}</div>
      <div>Second Counter - {newState.secondCounter}</div>
      {/* // note: now we pass the parameter `value` (aka payload) */}
      <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'increment', value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>
        Decrement 5
      </button>
      <div>
        <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>
          Increment Counter 2
        </button>
        <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
          Decrement Counter 2
        </button>
      </div>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}

export default Demo
