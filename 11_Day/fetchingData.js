// Task-6 : fetch api , promise method..

fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})


// Task-7 : fetch api, async await method..

const fetchData = async ()=>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);  
    } catch (error) {
        console.log(error);
    }
}

fetchData()