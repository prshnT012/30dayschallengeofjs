// Task-3 : array destructuring...

const arr = [1,2,3,4,5]

const [var1,var2] = arr

console.log(`First elem : ${var1} and Second elem : ${var2}`);


// Task-4 : object destructuring...

const book = {
    title : "random title of any book",
    author : "random author",
    year : 2030
}

const {title,author} = book

console.log(`title : ${title} and author : ${author}`);