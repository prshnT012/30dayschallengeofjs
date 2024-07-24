// Tak-4 : custom error class

class MyCustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "MyCustomError";
  }
}

// try {
//   throw new MyCustomError("This is a custom error");
// } catch (error) {
//   console.error(error.name, error.message);
// }



// Task-5 : validate user input

function validation(input) {
    try {
        if(input === "" || input === undefined){
            throw new MyCustomError("Input can not be empty")
        }
        console.log("input validated!!");
    } catch (error) {
        console.error(error);
    }
}


validation()



