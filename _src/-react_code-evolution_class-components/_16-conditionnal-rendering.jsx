import React, { Component } from 'react'

export class ConditionalComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true,
    }
  }
  // note: methode 1: if/else
  // note: if/else statement dont work inside jsx (`return` element)
  method1() {
    if (this.state.isLoggedIn) {
      return <div>Welcome Mani</div>
    } else {
      return <div>Welcome Guest</div>
    }
  }

  // note: methode 2: element variables
  method2() {
    let message
    if (this.state.isLoggedIn) {
      message = <div>Welcome Mani</div>
    } else {
      message = <div>Welcome Guest</div>
    }
    return message
  }

  // note: methode 3: ternary conditional operator
  method3() {
    return this.state.isLoggedIn ? <div>Welcome Mani</div> : <div>Welcome Guest</div>
  }

  // note: methode 4: short circuit operator
  // note: used if returning something or nothing
  method4() {
      return this.state.isLoggedIn && <div>Welcome Mani</div>
  }

  render() {
    return this.method4()
  }
}

export default ConditionalComponent
