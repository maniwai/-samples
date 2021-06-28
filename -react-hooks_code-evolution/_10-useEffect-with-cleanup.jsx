import React, {useState} from 'react'

import HookMouse from './_09-useEffect-render-only-once'

// will be render only once because of the return statement in useEffect from <HookMouse /> (file 09)
function MouseContainer() {
  const [display, setDisplay] = useState(true)
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <HookMouse />}
    </div>
  )
}

export default MouseContainer
