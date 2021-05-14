// note: React unmount any components having error
// note: React Error Methods are commonly used to log the error or a fallback UI
// note: an Error Boundary is a class component implementing getDerivedStateFromError() or componentDidCatch()
// note: the static method getDerivedStateFromError() is used to render a fallback UI after an error is thrown
// note: the method componentDidCatch() is used to log the error

// note: Error Boundary catch all the error in the all tree below them
// note: but they don't catch errors inside Event Handlers (we use try/catch instead)

import React, { Component } from 'react'

function Child({ heroName }) {
  if (heroName === 'Joker') {
    throw new Error('not a hero')
  }
  return <div>{heroName}</div>
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    }
  }
  componentDidCatch(error, info) {
    // redondant in devlopment (react already log all the errors)
    console.log(error)
    console.log(info)
  }
  render() {
    if (this.state.hasError) {
      return <h1>something when wrong</h1>
    }
    return this.props.children
  }
}

class Parent extends Component {
  render() {
    // note: the Boundary need to be wrap to the closed scope to render other components
    return (
      <>
        <ErrorBoundary>
          <Child heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Child heroName="Superman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Child heroName="Joker" />
        </ErrorBoundary>
      </>
    )
  }
}

export default Parent
