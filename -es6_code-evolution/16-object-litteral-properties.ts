let ln = 'last name'

let person = {
  // 1. we can use space to name properties
  'first name': 'Chandler',
  // 2. we can name properties dynamicly with bracket
  [ln]: 'Bing',
}
// 1. we need to use braket to access spaced properties name
console.log(person['first name'])
// 2. We can access dynamic properties name
console.log(person['last name'])
