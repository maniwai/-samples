// class unlike functions are not hoisted (means: it follow the order of execution)
class Person{
    greet(){}
}
let p = new Person();
// note: but it still use the prototyping under the hood
console.log(p.greet === Person.prototype.greet);






