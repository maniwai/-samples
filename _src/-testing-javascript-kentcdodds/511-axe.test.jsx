import React from 'react'
import {render} from '@testing-library/react'
const {axe, toHaveNoViolations} = require('jest-axe')

expect.extend(toHaveNoViolations)

const Example = () => {
  return (
    <form>
      <input id='email' placeholder='your email' />
    </form>
  )
}

// `toHaveNoViolations` check if the html is compliant
test('axe | toHaveNoViolations', async () => {
  const {container} = render(<Example />)
  const result = await axe(container)
  expect(result).toHaveNoViolations()
})
