import React, { useContext } from 'react'

// note: useContext only used to consume the context, we still provide the context with createContext()

const UserContext = React.createContext('default name') // note: we can set a default value with createContext()
const UserProvider = UserContext.Provider

export const Parent = () => {
  return (
    <div>
      <UserProvider value="Mani">
        <GrandChild />
      </UserProvider>
    </div>
  )
}

const GrandChild = () => {
  const user = useContext(UserContext)
  return <div>{user}</div>
}

export default Parent
