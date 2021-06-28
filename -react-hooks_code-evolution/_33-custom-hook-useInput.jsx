import React, { useState } from 'react'

// note: our custom hook needs to encapsulate the controlled element behavior for an input element
// note: by binding the event value and onChange attribute

function useXxInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  const reset = () => {
    setValue(initialValue)
  }
  // note: our properties have to match javascript events properties to bind properly
  const bind = {
    value: value,
    onChange: (e) => {
      setValue(e.target.value)
    },
  }
  return [value, bind, reset]
}

const Demo = () => {
  const [firstName, bindFirstname, resetFirstname] = useXxInput('')
  const [lastName, bindLastname, resetLastname] = useXxInput('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Hello ${firstName} ${lastName}`)
    resetFirstname()
    resetLastname()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">First Name</label>
          <input
            // note: we are now able to destructure the binded properties from our bind method
            {...bindFirstname}
            // note: will be destructured like so ...
            // value={firstname}
            // onChange={(e) => setFirstname(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input
            // value={lastname}
            // onChange={(e) => setLastname(e.target.value)}
            {...bindLastname}
            type="text"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Demo
