import React from 'react'
import PropTypes from 'prop-types'

import {render, fireEvent, queryByRole} from '@testing-library/react'
import user from '@testing-library/user-event'

const Example = ({min = 1, max = 9}) => {
  const [number, setNumber] = React.useState(0)
  const [numberEntered, setNumberEntered] = React.useState(false)
  const isValid = !numberEntered || (number >= min && number <= max)
  function handleChange(event) {
    setNumber(Number(event.target.value))
    setNumberEntered(true)
  }

  return (
    <>
      <label htmlFor='favorite-number'>Favorite Number</label>
      <input type='number' id='favorite-number' value={number} onChange={handleChange} />
      {isValid ? null : <div role='alert'>The number is invalid</div>}
    </>
  )
}
Example.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
}

test('fireEvent', () => {
  const {getByLabelText, getByRole} = render(<Example />)
  const input = getByLabelText(/favorite number/i)
  fireEvent.change(input, {target: {value: '10'}})
  expect(getByRole('alert')).toHaveTextContent(/the number is invalid/i)
})

// note: alternative with user helper witch more functionality
test('user.type', () => {
  const {getByLabelText, getByRole} = render(<Example />)
  const input = getByLabelText(/favorite number/i)
  user.type(input, '10')
  expect(getByRole('alert')).toHaveTextContent(/the number is invalid/i)
})

test('rerender', () => {
  const {getByLabelText, getByRole, rerender, debug, queryByRole} = render(<Example />)
  const input = getByLabelText(/favorite number/i)
  user.type(input, '10')
  expect(getByRole('alert')).toHaveTextContent(/the number is invalid/i)
  //   debug()
  // rerender allow to test other props values
  rerender(<Example max={10} />)
  //   debug()
  // note: now we need to use `queryByRole` instead of `getByRole` because the `alert` role won´t be return
  // note: try to use `getByRole` when possible to get better description
  expect(queryByRole('alert')).toBeNull()
})
