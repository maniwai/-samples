const data = [
  {name: 'Superman', my_array: ['fly']},
  {name: 'Dash', my_array: ['speed']},
  {name: 'Apogee', my_array: ['fly']},
]

const flyingHeros = () => {
  return data.filter(ele => {
    return ele.my_array.includes('fly')
  })
}
/**
 * Snapshot allow to track data change and update automaticly
 * example: duplicate `fly` will return + 1 array
 */
test('407 | snapshots', () => {
  const data = flyingHeros()
  expect(data).toMatchSnapshot()
})
