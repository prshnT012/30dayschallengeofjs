// Task-8 : iteration by for-in loop

let bookObj = {
    title : "Rudest Book Ever",
    author : "Shwetabh Gangwar",
    year : 2020,
    get : function(){
        return this.title + " " + this.year
    }
}

console.log("for in loop method");
for (const key in bookObj) {
    console.log(`${key} : ${bookObj[key]}`);
}


// Task-9 : iteration by object keys and value...

console.log("Object.keys method");
Object.keys(bookObj).forEach((key)=>{
    console.log(key + " " + bookObj[key]);
})

console.log("Object.values method");
Object.values(bookObj).forEach(val=>{
    console.log(val);
})

console.log("Object.entries method")
Object.entries(bookObj).forEach(([key,value])=>{
    console.log(key + " " + value);
})