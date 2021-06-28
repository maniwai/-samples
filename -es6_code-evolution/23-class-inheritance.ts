class Person {
  protected method1() {
    return 10
  }
}

class Employee extends Person {
  method2() {
    // we can use super to access parent method
    return super.method1()
  }
}

let e = new Employee()
console.log(e.method2())
