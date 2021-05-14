// note: used to acces DOM outside of react with ReactDOM.createPortal() (`root` element>)
// note: commonly used to access modals or pop-up
// note: even a portal outside root, it still act as a react child, events are propagated to the portal (event bubbling)

import React from 'react'
import ReactDOM from 'react-dom'

function PortalComponent() {

  const jsx = (
    <div>
      <h1>Portal Demo</h1>
    </div>
  )

  return ReactDOM.createPortal(jsx,document.getElementById('portal-root'))
}

export default PortalComponent
