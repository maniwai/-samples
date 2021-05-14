import React, { Component } from 'react'

// note: `render prop` refer to a technique for sharing code between components
// note: ... using a prop whose value is a function

class OriginalComponentCount extends Component {
  render() {
    const { count, incrementCount } = this.props
    return <button onClick={incrementCount}>Click {count} time</button>
  }
}
class OriginalComponentHover extends Component {
  render() {
    const { count, incrementCount } = this.props
    return <div onMouseOver={incrementCount}>Hover {count} time</div>
  }
}

class User extends Component {
  render() {
    //note: render() is now a function accepting parameters
    return <div>{this.props.render(false)}</div>
  }
}

class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 }
    })
  }

  render() {
    return <div>{this.props.render(this.state.count, this.incrementCount)}</div>
  }
}

const App = () => {
  return ( 
    <>
      <Container render={(count, incrementCount) => <OriginalComponentCount count={count} incrementCount={incrementCount} />} />
      <Container render={(count, incrementCount) => <OriginalComponentHover count={count} incrementCount={incrementCount} />} />
      {/* <OriginalComponentCount />
      <OriginalComponentHover />
      <User render={(isLoggedIn) => (isLoggedIn ? 'Mani' : 'Guest')} /> */}
    </>
  )
}

export default App
