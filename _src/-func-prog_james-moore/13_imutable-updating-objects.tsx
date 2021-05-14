import React from 'react'

const obj = {
  id: 1,
  name: 'Object 1'
}

// spread operator
const newObj = {
  ...obj,
  name: 'Updated Object',
  isNew: 'true'
}

console.table(newObj)

// destructuring
const { name, isNew } = newObj

// extracting with destructuring
const { id, ...others } = newObj
console.log(others)

const Demo = () => {
  return (
    <>
      <div>name: {name}</div>
      <div>is new: {isNew}</div>
    </>
  )
}

export default Demo
