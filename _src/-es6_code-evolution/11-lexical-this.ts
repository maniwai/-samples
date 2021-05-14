var employee = {
    id: 1,
    greet: function(){
       // with arrow function, `this` will refer to the parent scope 
       setTimeout(() => {console.log(this.id)}, 1000) ;
    }
};
employee.greet();