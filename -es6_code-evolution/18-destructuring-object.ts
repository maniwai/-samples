let employee = {
  fname: 'Chandler',
  lname: 'Bing',
  gender: 'Male',
}
// unlike array destructuring, we need to match the variable name with the name of the properties
// but we can use alias to rename the variable
let { fname:f, lname:l, gender:g } = employee
// with alias, we can not use property name anymore, we have to use the alias name
console.log(f)
console.log(l)
console.log(g)


