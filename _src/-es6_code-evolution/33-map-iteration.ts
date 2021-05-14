let myMap = new Map([
    ["fname", "Chandler"],
    ["lname", "Bing"],
])
// iterating the keys
for (let key of myMap.keys()) {
    console.log(key)
}
// iterating the values
for (let value of myMap.values()) {
    console.log(value)
}
// iterating the entries (keys & values)
for (const entry of myMap.entries()) {
    console.log(`${entry[0]} -> ${entry[1]}`)
}

// iterating the entries by destructuring
for (const [key, value] of myMap.entries()) {
    console.log(`${key} -> ${value}`)
}

// iterating the entries with forEach()
myMap.forEach((value, key) => {
    console.log(`${key} -> ${value}`)
});

export {};