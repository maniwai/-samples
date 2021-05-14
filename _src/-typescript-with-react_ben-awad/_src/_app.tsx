import React, { useState, useRef, useReducer } from 'react'

/**
 * DEFINITION
 */
interface Person {
  firstname: string
  lastname: string
}
interface Props {
  myString: string
  myBoolean?: boolean
  myNumber?: number
  myFunction?: (someString: string) => void
  myObject?: {
    someString: string
  }
  myPerson?: Person
  myHandleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
type Actions = { type: 'add'; text: string } | { type: 'remove'; idx: number }

interface Todo {
  text: string
  complete: boolean
}

type State = Todo[]

/**
 * APPLICATION
 */
const TodoReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case 'add':
      return [...state, { text: action.text, complete: false }]
    case 'remove':
      return state.filter((_, i) => {
        action.idx !== i
      })
    default:
      return state
  }
}
const MyComp: React.FC<Props> = (props: Props) => {
  const [count, setCount] = useState<number | null | undefined>(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const [todos, dispatch] = useReducer(TodoReducer, [])

  setCount(null)

  return (
    <div>
      <h1>{props.myString}</h1>
      <div>{count}</div>
      <input ref={inputRef} onChange={props.myHandleChange} />
      <button onClick={()=>{
        dispatch({type: "add", text:"My Todo"})
        dispatch({type: "remove", idx: 5})
      }}>{todos}</button>
    </div>
  )
}

/**
 * DEMO
 */
const Demo: React.FC = () => {
  return (
    <div>
      <MyComp
        myString="Hello World"
        myPerson={{ firstname: 'Bob', lastname: 'Marley' }}
        myHandleChange={(e) => e.currentTarget}
      />
    </div>
  )
}
export default Demo
