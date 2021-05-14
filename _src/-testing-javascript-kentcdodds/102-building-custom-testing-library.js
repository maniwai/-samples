const sum = (a, b) => a + b
const substract = (a, b) => a - b

/**
 * Building Custom Testing Library
 */
function myExpect(actual) {
  return {
    myToBe(expected) {
      if (actual != expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },

    myToEqual(expected) {},
    myToBeGreaterThan(expected) {},
  }
}

function myTest(title, callback) {
  try {
    callback()
    console.log(`✓ ${title}`)
  } catch (error) {
    console.log(`x ${title}`)
    console.log(error)
  }
}

myTest('sum adds numbers', () => {
  myExpect(sum(3, 7)).myToBe(10)
})
myTest('substract substract numbers', () => {
  myExpect(substract(7, 3)).myToBe(4)
})
