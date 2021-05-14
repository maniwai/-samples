const redux = require('redux')
const axios = require('axios')
const thunkMiddleware = require('redux-thunk').default

const applyMiddleware = redux.applyMiddleware

// ACTIONS
// ========================================================================================

// ACTIONS TYPE
// ----------------------------------------------------------------------------------------
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

// ACTIONS CREATOR
// ----------------------------------------------------------------------------------------
const fetchUserRequest = () => {
  // ACTION
  // --------------------------------------------------------------------------------------
  return {
    type: FETCH_USERS_REQUEST,
  }
}
// ACTIONS CREATOR
// ----------------------------------------------------------------------------------------
const fetchUserSuccess = (users) => {
  // ACTION
  // --------------------------------------------------------------------------------------
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  }
}
// ACTIONS CREATOR
// ----------------------------------------------------------------------------------------
const fetchUsersFailure = (error) => {
  // ACTION
  // --------------------------------------------------------------------------------------
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  }
}

// ACTIONS CREATOR
// ----------------------------------------------------------------------------------------
const fetchUsers = () => {
  // ACTION
  // --------------------------------------------------------------------------------------
  // note: `redux-thunk` allow to return a function instead of an action object
  // note: this function doesn´t have to be `pure` (it allow side effects)
  // note: this function can also dispatch actions by passing the `dispatch method` as an argument
  return function (dispatch) {
    // note: dispatch the `request` action
    dispatch(fetchUserRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        // Response
        // -----------------
        const users = response.data.map((user) => user.id)
        // note: dispatch the `success` action
        dispatch(fetchUserSuccess(users))
      })
      .catch((error) => {
        // Error
        // -----------------
        // note: dispatch the `failure` action
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

// REDUCERS
// ========================================================================================

// INITIAL STATE | required by the Reducer
// ----------------------------------------------------------------------------------------
const initialState = {
  loading: false,
  users: [],
  error: '',
}
// REDUCER
// ----------------------------------------------------------------------------------------
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      }
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: true,
        users: [],
        error: action.payload,
      }
    default:
      return state
  }
}

// STORE
// ========================================================================================

const createStore = redux.createStore
const store = createStore(reducer, applyMiddleware(thunkMiddleware))

store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())