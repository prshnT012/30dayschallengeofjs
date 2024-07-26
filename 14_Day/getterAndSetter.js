// Task-7 and 8 add getter and setter to the person class for their first name and last name...

class Person{
    constructor(firstName,lastName){
        console.log("constructor is called");
        this.firstName = firstName
        this.lastName = lastName
    }

    get firstName(){
        return this._firstName
    }

    get lastName(){
        return this._lastName
    }

    set firstName(firstName){
        console.log("setting the first namae");
        this._firstName = firstName
    }

    set lastName(lastName){
        this._lastName = lastName
    }
}

let human = new Person("Rajat","Kumar")

console.log(human.firstName);
human.firstName = "Akash"
console.log(human.firstName);