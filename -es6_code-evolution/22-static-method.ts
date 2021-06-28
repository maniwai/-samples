class Person {
  constructor(name: string) {
    name = name
    console.log(name + ' Constructor')
  }
  static staticMethod() {
    console.log('Static Method')
  }
}
// static method can be called without instantiating the class
Person.staticMethod()
