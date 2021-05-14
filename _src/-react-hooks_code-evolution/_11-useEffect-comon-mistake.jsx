import React, { useState, useEffect } from 'react'

// note: comon mistake is to forget to specify dependencies of useEffect: [count]
// note: alternativly we can use the previous state of useState, and we wont need to specify the demendencies: preCount => preCount + 1
function Demo() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // note: its recommended to define functions inside useEffect that it depend on
    const tick1 = () => {
      setCount(count + 1)
    }
    const tick2 = () => {
      setCount((preCount) => preCount + 1)
    }
    const interval = setInterval(tick2, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return <div>{count}</div>
}

export default Demo
