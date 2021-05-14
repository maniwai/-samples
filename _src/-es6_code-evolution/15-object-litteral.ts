function createPerson(firstname, lastname, age){
    let fullname = firstname + " " + lastname;

    return {
        fullname,// shortcut to `firstname: firstname`
        isSenior(){ // shortcut to `isSenior: () => {}`
            return age>60;
        }}
}

let p = createPerson("Ross","Geller", 62);

console.log(p.fullname);
console.log(p.isSenior())