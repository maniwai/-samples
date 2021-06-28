import React from 'react'

const meals = [
    {id:1, description: "Breakfast"},
    {id:2, description: "Lunch"},
]

function double(nbr: number) {
  return nbr * 2
}

// map applies a function to each element of the array
// and returns the updated array
const doubleId = meals.map(({id})=> double(id))
console.log(doubleId);

// filter return all elements evaluated to true
const keepLunch = meals.filter(({description})=>description ==="Lunch")
console.log(keepLunch);

const Demo = () => {
  return <div></div>
}

export default Demo
