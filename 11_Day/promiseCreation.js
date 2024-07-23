// Task-1 : Create a promise that resolve after 2 sec timeout and log the message..

let myPromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("promise resolved")
    }, 2000);
})
.then((msg)=>{
    console.log(msg);
})


// Task-2 : Create a promise that reject with an error message after 2 sec timeout and handle the error using .catch()

myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("promise rejected")
    },2000)
})
.catch((err)=>{
    console.log("error: "+err);
})