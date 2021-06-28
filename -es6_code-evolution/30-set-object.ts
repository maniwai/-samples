// `Set` retain only unique value (it can store any types, also object)

let mySet:any = new Set(["first", "second", "duplicate", "duplicate"])

console.log(mySet.size) // return `3`

mySet.add("findMe") // `add` a value in the array (if unique)

console.log(mySet.has("findMe")) // `has` retur n `true` if the value exist

mySet.delete("findMe") // `delete` to remove a value

console.log(mySet.has("findMe")) // now it return `false`

// iterating with forEach()
mySet.forEach(element => {
    console.log(element)
});
