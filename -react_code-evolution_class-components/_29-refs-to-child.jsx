import React, { Component } from 'react'

class Child extends Component {
  constructor(props) {
    super(props)

    this.inputRef = React.createRef()
  }

  focusInput() {
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    )
  }
}

class Parent extends Component {
  constructor(props) {
    super(props)
    // note: step 1 - create the ref
    this.componentRef = React.createRef()
  }
  handleClick = () => {
    // note: step 3 - execute child method
    this.componentRef.current.focusInput()
  }
  render() {
    return (
      <div>
        {/* // note: step 2 - create the ref  */}
        {/* // note: refs can be attached to class component only. not to functionnal component */}
        <Child ref={this.componentRef} />
        <button onClick={this.handleClick}>Focus Input</button>
      </div>
    )
  }
}

export default Parent
