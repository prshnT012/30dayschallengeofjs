// Task-5 : use spread operator to create a new array that contains the all elements of exisitng array and some more element..


const arr = [1,2,3,4,5]

const newArr = [...arr,6,7,8]

console.log(newArr);

// Task-6 : use Rest operator

function random(...numbers){
    return numbers.reduce((acc,cval)=>acc + cval,0);
}

console.log("Total sum is : "+ random(1,2,3));