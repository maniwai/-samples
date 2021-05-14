// note: Context provides a way to pass data through the component tree
// note: without having to pass props down manually at every level

import React, { Component } from 'react'

// note: step 1 - Create the context
const UserContext = React.createContext('default name') // note: we can set a default value with createContext()
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export class Component3 extends Component {
  render() {
    return (
      // note: step 3 - Consume the context value (need to use a function)
      <UserConsumer>
        {(username) => {
          return <div>Component3 context: {username}</div>
        }}
      </UserConsumer>
    )
  }
}

export class Component2 extends Component {
  // note: alternative method to consume the context by using the methode contextType
  // note: but this method has 2 limitation:
  // note: 1. only available for class component
  // note: 2. it can provide only a single context value
  static contextType = UserContext

  render() {
    return (
      <>
        Component2 context: {this.context}
        <Component3 />
      </>
    )
  }
}

export class Component1 extends Component {
  render() {
    return (
      // note: step 2 - Provide a context value
      <UserProvider value="Mani">
        <Component2 />
      </UserProvider>
    )
  }
}

export default Component1
