// Task-1 : handle error using try catch block

// try {
//     throw new Error("kuch toh error hein")
// } catch (error) {
//     console.log(error);
// }

// Task-2 : number division error handle

// function divide(x, y) {
//   try {
//     if (y === 0) {
//       throw new Error("Division by zero");
//     }
//     return x / y;
//   } catch (error) {
//     console.error("An error occurred:", error.message);
//   }
// }


// console.log(divide(5,0));

// Task-3 : finally block

let error = false

try {
    if(error === true){
        throw new Error("Throwing an error")
    }
} catch (error) {
    console.error(error);
}
finally{
    console.log("ye toh run krega hi..");
}