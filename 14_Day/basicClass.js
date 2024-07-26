// Task-1 : define a class person with name,age as property and and greet method...

class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    greet(){
        console.log(`Greeting from ${this.name}`);
    }
}


const human = new Person("Prashant Sharma",21)

human.greet();


// Task-2 : Add a method to the person class that updates the age property and logs the updated property..

Person.prototype.setAge = function(age){
    this.age = age;
    console.log("Updated age " + this.age );
}

human.setAge(23)

