import React, { Component } from 'react'

// note: parent methods are passed as prop to the child componant

function ChildComponent(props) {
  // note: use arrow function to pass parameter
  return <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
}

class ParentComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      parentName: 'parent',
    }
    // note: see `binding chap 14`
    this.greedParent = this.greedParent.bind(this)
  }

  greedParent(childParam) {
    alert(`Hello ${this.state.parentName} from ${childParam}`)
  }

  render() {
    return (
      <>
        <ChildComponent greetHandler={this.greedParent} />
      </>
    )
  }
}

export default ParentComponent
