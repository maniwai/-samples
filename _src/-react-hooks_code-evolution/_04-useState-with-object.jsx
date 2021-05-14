import React, { useState } from 'react'

// note: useState does not automaticly merge the state (unlike setState in class component)
// note: we need to use the spread operator to include all the states with the updated value: {...name, firstname: newvalue}

function StatDemo() {
  const [name, setName] = useState({ firstname: '', lastname: '' })
  return (
    <div>
      <input type='' value={name.firstname} onChange={e => setName({...name, firstname: e.target.value})} />
      <input type='' value={name.lastname} onChange={e => setName({...name, lastname: e.target.value})} />
      <h2>your first name is {name.firstname}</h2>
      <h2>your last name is {name.lastname}</h2>
      <h3>{JSON.stringify(name)}</h3>
    </div>
  )
}

export default StatDemo
