import React, { useState, useCallback } from 'react'

// note: useCallback is used for performance optimization

// note: using `memo`, the handler functions will still be re-rendered (`incrementAge` and `incrementSalary`, will both be re-rendered) because of reference equality.
// note: useCallback resolve this problem by returning a memorized version of the callback function that only changes if one of the dependencies has changed.
// note: means useCallback will cache the value and return it if it has not changed (by shallow comparaison).
// note: usefull when passing callback to optimize child components that rely on reference equality to prevent unnecessary renders.

const ChildTitle = () => {
  console.log('rendering title!')
  return <h2>useCallback Hook</h2>
}
// note: export with memo
const MemoChildTitle = React.memo(ChildTitle)

const ChildCount = ({ text, count }) => {
  console.log(`rendering  ${text}`)
  return (
    <div>
      {text} - {count}
    </div>
  )
}
// note: export with memo
const MemoChildCount = React.memo(ChildCount)

// note: children is provided by react and return the component content
const ChildButton = ({ handleClick, children }) => {
  console.log(`rendering button - `, children)
  return <button onClick={handleClick}>{children}</button>
}
// note: export with memo
const MemoChildButton = React.memo(ChildButton)

// note: every component will be re-render at each click
const Parent = () => {
  const [age, setAge] = useState(25)
  const [salary, setSalary] = useState(50000)

  const incrementAge = () => {
    setAge(age + 1)
  }
  const incrementSalary = () => {
    setSalary(salary + 1000)
  }
  // note: useCallback implementation
  const callbackIncrementAge = useCallback (incrementAge, [age])
  const callbackIncrementSalary = useCallback (incrementSalary, [salary])

  return (
    <div>
      <MemoChildTitle />
      <MemoChildCount text="Age" count={age} />
      {/* // note: switch back to incrementAge() to compare */}
      <MemoChildButton handleClick={callbackIncrementAge}>Increment Age</MemoChildButton>
      <MemoChildCount text="Salary" count={salary} />
      <MemoChildButton handleClick={callbackIncrementSalary}>Increment Salary</MemoChildButton>
    </div>
  )
}

export default Parent
