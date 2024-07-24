// Task-6 : error handling in promise

const myPromise = new Promise((resolve,reject)=>{
    let error = true;
    try {
        if(!error){
            resolve("Registration completed!!")
        }else{
            throw new Error("Registration failed while signing up!!!")
        }
    } catch (error) {
        reject(error)
    }
})

myPromise
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.error(error);
})


// Task-7 : error handling in async await 

const validation = async ()=>{
    try {
        const response = await myPromise
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

validation()