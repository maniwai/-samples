import React from 'react'
import ReactDOM from 'react-dom'
import {getQueriesForElement, queries} from '@testing-library/react'
import {render} from '@testing-library/react'

function Example() {
  return (
    <>
      <label htmlFor='favorite-number'>Favorite Number</label>
      <input id='favorite-number' type='number' />
    </>
  )
}

test('querySelector', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Example />, div)
  // render `type`
  expect(div.querySelector('input').type).toBe('number')
  // render `content`
  expect(div.querySelector('label').textContent).toBe('Favorite Number')
})

test('toHaveAttribute', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Example />, div)
  // render `type`
  expect(div.querySelector('input')).toHaveAttribute('type', 'number')
  // render `content`
  expect(div.querySelector('label')).toHaveTextContent('Favorite Number')
})

test('queries', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Example />, div)
  // `getByLabelText` will also check if a form control is associated
  const input = queries.getByLabelText(div, 'Favorite Number')
  expect(input).toHaveAttribute('type', 'number')
})

test('regex', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Example />, div)
  const input = queries.getByLabelText(div, /favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
})

test('getQueriesForElement', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Example />, div)
  const {getByLabelText} = getQueriesForElement(div)
  // no need to pass the element again
  const input = getByLabelText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
})

// abstracting the render logic
function myRender(component) {
  const container = document.createElement('div')
  ReactDOM.render(component, container)
  const queries = getQueriesForElement(container)
  return {container, ...queries}
}
test('custom `render`', () => {
  const {getByLabelText} = myRender(<Example />)
  const input = getByLabelText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
})

// we can also use the build-in implementation `render` instead
test('`render` helper', () => {
  const {getByLabelText} = render(<Example />)
  const input = getByLabelText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
})
test('`debug()`', () => {
  const {getByLabelText, debug} = render(<Example />)
  const input = getByLabelText(/favorite number/i)
  // note: decomment for the example
  // debug(input)
})
