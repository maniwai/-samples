// @ts-nocheck

import * as react from '@testing-library/react'
import React, {useState} from 'react'

import api from './api1'

const Example = () => {
  const [display, setDisplay] = useState('')
  const handleSubmit = async event => {
    event.preventDefault()
    const {data} = await api(event.target.elements.name.value)
    setDisplay(data.response)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name</label>
      <input id='name' />
      <button type='submit'>Submit</button>
      <div aria-label='greeting'>{display}</div>
    </form>
  )
}

// note: preferably use dependency injection to mock (lesson 513)
jest.mock('./api1')

test('load greetings on click', async () => {
  const testResponse = 'Test_GREEDING'
  api.mockResolvedValueOnce({data: {response: testResponse}})
  const {getByLabelText, getByText} = react.render(<Example />)
  const nameInput = getByLabelText(/name/i)
  const loadButton = getByText(/submit/i)
  nameInput.value = 'Mary'
  react.fireEvent.click(loadButton)
  expect(api).toHaveBeenCalledWith('Mary')
  expect(api).toHaveBeenCalledTimes(1)
  await react.waitFor(() => expect(getByLabelText(/greeting/i)).toHaveTextContent(testResponse))
})
