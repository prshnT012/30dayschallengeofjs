// Task-7 : use map method to create a new array where each number is doubled and log the new array...

let arr = [1,2,3,4,5,6,7,8,9,10]

let newArr = arr.map((elem)=>{
    return elem*2
})

console.log("updated array(map) : "+newArr);

//  Task-8 : use filter method to create a new array with only even number in the array and log the new array..

let newArr2 = arr.filter((value)=>{
    if(value%2==0){
        return value
    }
})

console.log("updated array (filter) : " + newArr2);


// Task-9 : use reduce method to calculate the sum of all elements in array and log the result..

let sum = arr.reduce((acc,cval)=>{
    return acc + cval
},0)

console.log(`Sum of the elements in the array is : ${sum}`);