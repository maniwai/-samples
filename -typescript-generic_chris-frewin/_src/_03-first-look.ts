interface IFooBar {
    foo: string
    bar: string
}

const fooBars: Array<IFooBar> =  [
     {
         foo: "foo1",
         bar: "bar1"
     },
     {
         foo: "foo2",
         bar: "bar2"
     },
     {
         foo: "foo3",
         bar: "bar3"
     },
]

function sortByFoo(fooBars: Array<IFooBar>) {
    fooBars.sort((a, b )=> {
        if(a.foo > b.foo) {
            return 1 
        }
        if(a.foo < b.foo) {
            return -1 
        }
        return 0
    })
}

/**
 * Generic Alternative
 * @param data // the array we search in
 * @param key // the key we search for
 */
function sortByKey<T>(data: Array<T>, key: keyof T) {
    data.sort((a, b) => {
        if(a[key] > b[key]) {
            return 1 
        }
        if(a[key] < b[key]) {
            return -1 
        }
        return 0
    })
}

sortByKey<IFooBar>(fooBars, "foo")