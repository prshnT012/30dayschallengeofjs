// Task-3 : create a div element and append as a child into the body...
const elem = document.createElement('div')

elem.innerText = "hello there created div element"

document.body.appendChild(elem);



// Task-4 : append new li element into the ul.

const ul = document.querySelector("ul")

const newLi = document.createElement("li")

newLi.innerText = "Java"

ul.appendChild(newLi)