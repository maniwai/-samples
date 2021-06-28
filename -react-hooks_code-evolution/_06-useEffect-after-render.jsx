// note: useEffect lets you perform side effects in functionnal components
// note: it replace the class component methods
// note: - componentDidMount()
// note: - componentDidUpdate()
// note: - componentWillUnmount()

import React, { useState, useEffect } from 'react'

// note: exemple to update the document title when the count update

function EffectDemo() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  // note: useEffect is executed every time the component re-render
  // note: unless we specify witch state to watch to execute in the 2nd parameter: [count]
  useEffect(()=>{
      console.log('useEffect - updating document title') 
      document.title = `You clicked ${count} times`
  },[count])
  return (
    <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count} times
      </button>
    </div>
  )
}

export default EffectDemo
