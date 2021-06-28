import React, { useReducer, useContext } from 'react'

// note: useContext only used to consume the context, we still provide the context with createContext()

const UserContext = React.createContext('default name') // note: we can set a default value with createContext()
const UserProvider = UserContext.Provider

// note: step 1 - define intitial state and reducer
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

// note: step 3 - export the context
const CountContext = React.createContext()

export const Parent = () => {
  // note: step 2 - access new state and dispatch from useReducer
  const [newState, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      {/* // note: step 4 - wrap with the context provider */}
      {/* // note: we pass the state and dispatch to the provider */}
      <CountContext.Provider
        value={{ countState: newState, countDispatch: dispatch }}
      >
        Count - {newState}
        <GrandChild />
      </CountContext.Provider>
    </div>
  )
}

const GrandChild = () => {
  const context = useContext(CountContext)
  return (
    <>
      <button onClick={() => context.countDispatch('increment')}>Increment</button>
      <button onClick={() => context.countDispatch('decrement')}>Decrement</button>
      <button onClick={() => context.countDispatch('reset')}>Reset</button>
    </>
  )
}

export default Parent
