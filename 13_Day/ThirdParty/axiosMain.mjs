// Task-7
import axios from "axios";

async function fetchData(URL){
    let data = await axios(URL)
    console.log(data);
}

fetchData('https://jsonplaceholder.typicode.com/posts')