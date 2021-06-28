import React, { Component } from 'react'

// note: ´this´ is ´undefined´ within a function (not arrow function). here some workarround
// note: method 4 is the best approach

export class EventBind extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Hello',
    }
    // note: method 3: official method - bind `this` in the constructor - so it will be bind only once
    // this.clickHandler = this.clickHandler1.bind(this)
  }

  clickHandler1() {
    this.setState({
      message: 'GoodBye!',
    })
  }
  // note: method 4: define the method with an arrow function
  clickHandler2 = () => {
    this.setState({
      message: 'GoodBye!',
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* // note: method 1: `bind` the event - problem it will be rerender at all state update  */}
        {/* <button onClick={this.clickHandler1.bind(this)}>click</button> */}
        {/* // note: method 2: arrow function - problem also have performance implication  */}
        {/* <button onClick={() => this.clickHandler1()}>click</button> */}
        {/* // note: method 3: see constructor  */}
        <button onClick={this.clickHandler2}>click</button>
      </div>
    )
  }
}

export default EventBind
