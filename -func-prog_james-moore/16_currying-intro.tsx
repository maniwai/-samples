import React from 'react'

function greet(greet: string, name: string) {
  return `${greet} ${name}`
}

// console.log(greet("Hello", "Mani"));

const friends = ['John', 'Eric', 'Jane']

const greetFriends = friends.map((name) => greet('Hello', name))
console.log(greetFriends);

// currying: returning a function allows to provide a single parameters to the function
function greet2(greet: string) {
  return function (name: string) {
    // closure: gives you access to an outer function’s scope (here `greet`)
    return `${greet} ${name}`
  }
}
const greetFriends2 = friends.map((ele) => greet2('Good Morning')(ele))
console.log(greetFriends2)

// equivalent (shortcut):
const greetFriends3 = friends.map(greet2('Good Night'))
console.log(greetFriends3)

// Higher Order Function: is a function that take a function as param OR if it returns a function

const Demo = () => {
  return <div></div>
}

export default Demo
