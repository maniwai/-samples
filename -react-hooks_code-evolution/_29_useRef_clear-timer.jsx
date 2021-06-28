import React, { useState, useEffect, useRef } from 'react'

// note: useRef can also be used to store any mutable value (ex: `intervalRef`)
// note: the benefice is the value will persiste to the re-render and not causing additional renders when its value changes

// note: in other word, it can be used to create a generic container witch can hold a mutable value similar to instance properties on a class component (`this`)
// note: this generic container does not cause re-renders when the data it stores changes
// note: at the same time, it also remember the stored data even after other state variable cause a re-render of the component
// note: simple use case is clearing an interval timer from an event handler

const Demo = () => {
  const [timer, setTimer] = useState(0)

  // note: we can now access intervalRef inside function scope
  const intervalRef = useRef()

  const myTimer = () => {
    setTimer((prevTimer) => prevTimer + 1)
  }
  // note: behavior of componentDidMount and componentWillUnmount
  useEffect(() => {
    // note: intervalRef is now accessible
    intervalRef.current = setInterval(myTimer, 1000)
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])
  return (
    <div>
      Hook Timer - {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Hook Timer
      </button>
    </div>
  )
}

export default Demo
