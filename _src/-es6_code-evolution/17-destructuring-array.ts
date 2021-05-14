let employee = ["Chandler", "Bing", "Male", 34];

// ex:1. we assign to variable from element in array
// ------
let [firstname1, lastname1] = employee;
console.log(lastname1);

// ex:2. we can omit the element we dont need with empty variable (and leaving a comma)
// ------
let [, lastname2] = employee;
console.log(lastname2)

// ex:3. we can use the rest operator to combine remaining elements
let [firstname3, ...elements] = employee
console.log(elements)

// ex:4. we can assign default value in case the element we are expecting is not present
// note: if the value exist, it won´t overwrite: ie: it return 34 (not 23)
let [firstname4, lastname4, gender4, age=23] = employee
console.log(age)