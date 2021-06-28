import React from 'react'
import {CSSTransition} from 'react-transition-group'

import {render, fireEvent} from '@testing-library/react'

function Fade(props) {
  return <CSSTransition unmountOnExit timeout={1000} classNames='fade' {...props} />
}

function HiddenMessage({children}) {
  const [show, setShow] = React.useState(false)
  const toggle = () => setShow(s => !s)
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <Fade in={show}>
        <div>{children}</div>
      </Fade>
    </div>
  )
}

// we mock so we don´t wait 1000 ms to render
jest.mock('react-transition-group', () => {
  return {
    CSSTransition: props => (props.in ? props.children : null),
  }
})

test('shows hidden message when toggle is clicked', () => {
  const myMessage = 'hello world'
  const {getByText, queryByText} = render(<HiddenMessage>{myMessage}</HiddenMessage>)
  const toggleButton = getByText(/toggle/i)
  // because message is hidden by default
  expect(queryByText(myMessage)).not.toBeInTheDocument()
  // toogle to show message
  fireEvent.click(toggleButton)
  // now the message should be visible
  expect(getByText(myMessage)).toBeInTheDocument()
  // toogle to hide message
  fireEvent.click(toggleButton)
  // now the message should be visible
  expect(queryByText(myMessage)).not.toBeInTheDocument()
})
