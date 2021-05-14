import React, { Component } from 'react'

class Parent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Mani',
    }
    console.log('constructor')
  }
  // note: called everytime a component is re-rendered
  // note: used when the state depend of the prop (rarely used)
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps')
    // note: has to return the new state or null    
    return null
  }
  // note: called "once" after component render
  // note: used for side effect (ex: http request)
  componentDidMount() {
    console.log('componentDidMount')
  }
  // note: called "once" after state change
  // note: most used lifecycle method
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  // note: used to clear data and event after component is removed
  componentWillUnmount() {
  }

  handleClick = () => {
    this.setState({
        name: null
    })
  }

  render() {
    console.log('render')
    return (
      <>
        <h1>Parent</h1>
        <h4>{this.state.name}</h4>
        <button onClick={this.handleClick}>change state</button>
      </>
    )
  }
}

export default Parent
