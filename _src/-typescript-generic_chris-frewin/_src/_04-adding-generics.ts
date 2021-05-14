class Animal {
    public legCount: number

    constructor(legCount: number) {
        this.legCount = legCount
    }
}
class Cat extends Animal {
    constructor() {
        super(4)
    }
}

class Kangaroo extends Animal {
    constructor() {
        super(2)
    }
}

function printLegCount<T extends Animal>(animal: T) {
    console.log(`My animal leg count is ${animal.legCount}`)
}

const myCat = new Cat()
const myKangaroo= new Kangaroo()

printLegCount(myCat)
printLegCount(myKangaroo)

