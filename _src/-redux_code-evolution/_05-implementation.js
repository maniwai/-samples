import { createStore, applyMiddleware, combineReducers } from 'redux'

// ACTIONS
// ----------------------------------------------------------------------------------------

// TYPE OF ACTION
// string constant that indicate the type of action
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// ACTION CREATOR
// an action creator is a function that return an action
function buyCake() {
  // ACTION | action is the only way the application can interact with the store
  // an action is an object with a type property
  return {
    type: BUY_CAKE,
    info: 'first redux action!',
  }
}
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  }
}

// INITIAL STATE | required by the Reducer
// ----------------------------------------------------------------------------------------

const initialCakeState = {
  numOfCakes: 10,
}

const initialIceCreamState = {
  numOfIceCreams: 20,
}

// REDUCERS | (prevState, action) => newState
// ----------------------------------------------------------------------------------------

// REDUCER | is a pure function that accept the state and action as argument and return a new state
// it specify how the app´s state changes in response to action sent to the store
// note: the `action` will be provided with the store `dispatch` method
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    // we are not mutating the state, it return a new object
    case BUY_CAKE:
      return {
        // we return all the state
        ...state,
        // and update the change
        numOfCakes: state.numOfCakes - 1,
      }
    default:
      return state
  }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      }
    default:
      return state
  }
}

// COMBINE REDUCERS
// the store accept only 1 reducer object, we need to combine the reducers with the combineReducers middleware

// the convention is to start the combined name by `root`
const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer,
})

// STORE | hold the application state
// =========================================================================================

// note: step 1 - we create the store and apply middlewares
const store = createStore(rootReducer, applyMiddleware())

// the store provide a method getState() to access the state of the app
console.log('Initial State', store.getState())

// note: step 2 - we subscribe to the store
// the store registers listeners via subscribe()
const unsubscribe = store.subscribe(() => {})

// note: step 3 - we dispatch an action
// the store allows state to be updated via dispatch()
// note: actions and reducers are not coupled
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

// note: final step - we unsubscribe to the store
// the store handles unregistering of listeners via the function return by subscribe()
unsubscribe()
