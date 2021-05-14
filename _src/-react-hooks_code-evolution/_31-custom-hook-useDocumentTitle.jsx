import React, { useState, useEffect } from 'react'

// note:
// note: demo to update the title when a state change

// note: step 3 - our custom hook get the state variable and update the document title
function useXxDocTitle(count) {
  useEffect(() => {
    document.title = `Count - ${count}`
  }, [count])
}

const DocTitleOne = () => {
  // note: step 1 - we create a state variable with initial state of 0
  const [count, setCount] = useState(0)

  // note: step 2 - we call our custom hook function passing our state variable
  // note: we can import our custom hook in our component
  useXxDocTitle(count)
    
  return (
    <div>
      {/* // note: final step - on click event will update the state and re-render our hook */}
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  )
}

export default DocTitleOne
