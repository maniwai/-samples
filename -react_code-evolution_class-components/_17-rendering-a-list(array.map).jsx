import React from 'react'

// note: recommended to refactor the jsx in a separate component
function PersonComponent({ person }) {
  return (
    <div>
      I am {person.name}. I am {person.age}. I know {person.skill}
    </div>
  )
}

// note: list component is only responsable to rendering the list
function ListComponent() {
  const persons = [
    {
      id: 1,
      name: 'Clark',
      age: 34,
      skill: 'Fly',
    },
    {
      id: 2,
      name: 'Diana',
      age: 28,
      skill: 'Vue',
    },
  ]
  const personList = persons.map((person) => <PersonComponent key={person.id} person={person} />)
  return <div>{personList}</div>
}

export default ListComponent
