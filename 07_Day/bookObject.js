// Task-1: create an object that representing the book with properties like title,author and year.

let bookObj = {
    title : "Rudest Book Ever",
    author : "Shwetabh Gangwar",
    year : 2020
}

console.log(bookObj);

// Task-2 : access and log the title and author property of book object...

let title = bookObj.title
let author = bookObj.author

console.log(`title : ${title} | author : ${author}`);

// Task-3 and 7 : adding the method in the object that return the string which contains the title and author...

bookObj = {
    ...bookObj,
    get : function(){
        return `Title : ${this.title}, Author : ${this.author}`
    }
}
console.log(bookObj.get());

// Task-4 : add method in object that takes year as parameter and update the year property in book object

bookObj = {
    ...bookObj,
    updateYear : function(year){
        this.year = year
    }
}

bookObj.updateYear(2030)

console.log("Updated Year : " + bookObj.year);