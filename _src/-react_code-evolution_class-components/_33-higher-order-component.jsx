import React, { Component } from 'react'

// note: HOC is a pattern where a function takes a component as an argument and return a new component
// note: const EnhancedComponent = HigherOrderComponent(OriginalComponent) -> const IronMan = withSuit(TonyClark)

// note: we also pass parameters in the argument (`incrementNumber`)
const HigherOrderComponent = (OriginalComponent, incrementNumber) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        count: 0,
      }
    }
    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber }
      })
    }
    render() {
      // note: we pass the state and method with props
      // note: remember to pass remaining props with the spread operator
      return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props} />
    }
  }
  return NewComponent
}

class OriginalComponentClick extends Component {
  render() {
    // note: we access the HOC state and method from the props
    const { count, incrementCount } = this.props
    return (
      <div>
        <button onClick={incrementCount}>
          {this.props.name} Clicked {count} times
        </button>
      </div>
    )
  }
}
class OriginalComponentHover extends Component {
  render() {
    // note: we access the HOC state and method from the props
    const { count, incrementCount } = this.props
    return (
      <div>
        <div onMouseOver={incrementCount}>Hovered {count} times</div>
      </div>
    )
  }
}

// note: each original components have there own state
const EnhancedComponent1 = HigherOrderComponent(OriginalComponentClick, 5)
const EnhancedComponent2 = HigherOrderComponent(OriginalComponentHover, 10)

const App = () => {
  return (
    <>
      <EnhancedComponent1 name="Mani" />
      <EnhancedComponent2 />
    </>
  )
}

export default App
