import React, { Component } from 'react'
// note: same exemple as previous but with Functional child component 
// note: (rarely used, usefull to work with libraries, or dealing with HOC)

// note: receive the ref from React.forwardRef() (only works with arrow function)
const Child = (props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  )
}
// note: extra step 3 - forward ref to the functional child component
const FwRef = React.forwardRef(Child)

class Parent extends Component {
  constructor(props) {
    super(props)
    // note: step 1 - create the ref
    this.inputRef = React.createRef()
  }

  handleClick = () => {
    // note: step 4 - parent can directly access element of the child component
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        {/* // note: step 2 - create the ref  */}
        <FwRef ref={this.inputRef} />
        <button onClick={this.handleClick}>Focus Input</button>
      </div>
    )
  }
}

export default Parent
