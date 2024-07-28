// Task-3 : calcualte sum of all elements in the array through recursion approach

const num = [1,2,3,4,5,6,7,8,9]

function sum(num){
    if(num.length === 0){
        return 0;
    }
    return num[0] + sum(num.slice(1))
}

console.log(`sum of all elements in num is : ${sum(num)}`);


// Task-4 : calculate max element in the array through recursion.

function max(num){
    if(num.length === 0){
        return 0;
    }
    return Math.max(num[0],max(num.slice(1)));
}

console.log(`max element in the num array is : ${max(num)}`);