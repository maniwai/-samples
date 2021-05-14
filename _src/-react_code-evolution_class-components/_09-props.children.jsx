import React from 'react'

function Children(props) {
  // props.name = "Mani" // throw error because props are immutable
  return (
    <>
      <h1>
        Hello {props.name} aka {props.heroName}
      </h1>
      {props.children}
    </>
  )
}

function Parent() {
  return (
    <div>
      <Children name="Bruce" heroName="Batman">
        <p>This is the children props</p>
      </Children>
      <Children name="Clark" heroName="Superman">
        <button>Action</button>
      </Children>
      <Children name="Diana" heroName="Wonder Woman" />
    </div>
  )
}

export default Parent
