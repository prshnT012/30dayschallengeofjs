// Task-1 : use template literals to create a string that include variables for a person name and age..

const getDetails = (myName,age)=>{
    return `My name is ${myName} and my age is ${age}.`
}

console.log(getDetails("prashant",21));

// Task-2 : create a multiline string using template literals...

const someText = `hello there...
some random text
is here..
okay now done.
`

console.log(someText);