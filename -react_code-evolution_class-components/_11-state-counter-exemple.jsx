import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  // note: method 1 (limited to access previous value)
  increment1() {
    // note: directly updating the value won´t be rerender by react
    // this.state.count = this.state.count + 1

    this.setState(
      {
        count: this.state.count + 1,
      },
      // note: 2nd param is a callback function
      () => {
        console.log(`async: ${this.state.count}`)
      }
    )
    // note: console.log display previous state (because its async)
    console.log(`sync: ${this.state.count}`)
  }
  // note: method 2 (can access previous value)
  increment2() {
    // note: function as an argument: (param) => (Immediately Invoked Function Expression aka IIFE)
    this.setState(
      (prevState, props) => ({
        count: prevState.count + 1,
      }),
      console.log(`async by 5: ${this.state.count}`)
    )
  }

  /**
   * note: react groups multiple state calls into a single update for better performance
   * note: if you need to update state based on previous state you need to pass a function as an argument (`increment2`) instead of an object (`increment1`)
   */

  incrementFive() {
    this.increment2()
    this.increment2()
    this.increment2()
    this.increment2()
    this.increment2()
  }

  render() {
    return (
      <>
        <div>count - {this.state.count}</div>
        <button
          onClick={() => {
            this.incrementFive()
          }}
        >
          Increment
        </button>
      </>
    )
  }
}

export default Counter
