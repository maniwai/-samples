// `var greet` will be hosted at the top of the function to get accessible
function greetPerson(name){
    if(name === "Chandler"){
        var greet = "Hello Chandler";
    }else{
        var greet = "Hi there";
    }
    console.log(greet);
}
greetPerson("Chandler");