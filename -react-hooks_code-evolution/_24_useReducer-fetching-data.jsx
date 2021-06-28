import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

// note: step 1 - define intital state and reducer
const initialState = {
  loading: true,
  error: '',
  post: {},
}
const reducer = (currentState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: '',
      }
    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: 'something when wrong!',
      }
    default:
      return currentState
  }
}

const Demo = () => {
  // note: step 2 - access new state and dispatch from useReducer
  const [newState, dispatch] = useReducer(reducer, initialState)

  // note: step 3 - make the http call
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_SUCCESS' })
      })
  }, [])

  return (
    <div>
      {newState.loading ? 'Loading' : newState.post.title}
      {newState.error ? newState.error : null}
    </div>
  )
}

export default Demo
