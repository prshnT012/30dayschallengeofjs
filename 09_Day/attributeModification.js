// Task-7 : select an html element and change one of its attribute (src of img)


const img = document.querySelector("img");

img.src = "https://images.pexels.com/photos/10161899/pexels-photo-10161899.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";


// Task-8 : Add and remove the css class from an html element...


// add the class...
const element = document.getElementById('myElement');
element.classList.add('newClass');

// remove the class
element.classList.remove('oldClass');
