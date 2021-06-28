export default function genericSearch<T>(
  object: T,
  properties: Array<keyof T>,
  query: string,
  shouldBeCaseSensitive: boolean
): boolean {
  if (query === '') {
    return true
  }
  return properties.some((property) => {
    const value = object[property]
    // type garde
    if (typeof value === 'string' || typeof value === 'number') {
      if (shouldBeCaseSensitive) {
        return value.toString().includes(query)
      } else {
        return value.toString().toLowerCase().includes(query.toLowerCase())
      }
    }
    return false
  })
  //   const expression = properties.map((properties) => {})
  //   const value = object[property]
}
