
const promiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve("promiseOne resolved")
        }else{
            reject("something went wrong for promiseOne")
        }
    },1000)
})



const promiseTwo = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve("promiseTwo resolved")
        }else{
            reject("something went wrong for promiseTwo")
        }
    },2000)
})



const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve("promiseThree resolved")
        }else{
            reject("something went wrong for promiseThree")
        }
    },3000)
})



// Task-8 : promise.all method...


Promise.all([promiseOne,promiseTwo,promiseThree])
.then((values)=>{
    console.log(values);
})
.catch((error)=>{
    console.log(error);
})


// Task-9 : promise.race method

Promise.race([promiseOne,promiseTwo,promiseThree])
.then(values => {
    console.log(values);
})
.catch(error =>{
    console.log(error);
})