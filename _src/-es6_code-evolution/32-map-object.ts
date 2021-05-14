// similar to Set() but store key/value pair
// note: use preferably `WeakMap()`to handle garbage collection (instead of `Map()`)

let myMap:any = new Map()

let obj1 = {}
let obj2 = {}

let obj3 = obj1

myMap.set(obj1,{key1: "val1"})
myMap.set(obj2,{key2: "val2"})
myMap.set(obj3,{key3: "val3"})

// console.log(myMap.get(obj1)) // return {key3: "val3"}

myMap.delete(obj3)

// console.log(myMap.get(obj1)) // now it return `undefined`

myMap.clear() // `clear()` remove all keys

console.log(myMap) // now its an empty object `{}`