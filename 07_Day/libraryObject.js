// Task-5 : nested object....


let library = {
    name : "library name",
    books : [
        {
        id : 1,title : "title1",author : "author1"},
        {id:2,title : "title2",author : "author2"},
        {id:3,title : "title3",author : "author3"}
    ]
}

// Task-6 : access the titles of all books..

library.books.map(obj=>{
    console.log(obj.title);
})