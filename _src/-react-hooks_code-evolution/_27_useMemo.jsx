import React, { useState, useMemo } from 'react'

// note: useMemo is used for performance optimization

// note: useCallback and useMemo are very similar, the difference is:
// note: - useCallback cache the provided function instance itself
// note: - useMemo invoke the provided function and cache its result
// note: if we need to cache a function use useCallback
// note: if we need to cache the result of an invoke function use useMemo

// note: slow functions will after other functions, because the component re-render every time the states update
// note: useMemo tell React

const Demo = () => {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  const increment1 = () => {
    setCounter1(counter1 + 1)
  }
  const increment2 = () => {
    setCounter2(counter2 + 1)
  }

  const isEven = () => {
    // note: faking expensive computation
    let i = 0
    while (i < 2000000000) i++

    return counter1 % 2 === 0
  }
  const MemoIsEven = useMemo(isEven, [counter1])

  return (
    <div>
      <div>
        <button onClick={increment1}>Count One - {counter1}</button>
        {/* // note: we use the Memo version so it wont re-render if the function was not executed */}
        {/* // note: remove the parenthesis, because MemoIsEvent now store a value */}
        <span>{MemoIsEven ? 'Event' : 'Odd'}</span>
      </div>
      <div>
        {/* // note: now increment1 won´t be re-rendered, when updating increment2 */}
        <button onClick={increment2}>Count Two - {counter2}</button>
      </div>
    </div>
  )
}

export default Demo
