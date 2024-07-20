// Task-8 : use enhanced object literals...

const name = "prashant"
const gender = "male"
const age = 21
const greet = ()=>{
    console.log(`Hello, my name is ${name}`);
}
const obj1 = {
    name,
    gender,
    greet
}

console.log(obj1);


// Task-9 : create an object with computed property name and log the object

let human = {
    [name] : `Hello my name is ${name}`,
    age,
    ['Full name'] : `${name} sharma`
}

console.log(human);