// Task-1 : creation of the array of number

let arr = [1,2,3,4,5]

console.log("array : "+arr);

// Task-2 : Access the first and last element of the array..
console.log(`first elem of arr : ${arr[0]} and last elem of arr : ${arr[arr.length - 1]}`);

// Task-3 : use push method to add element in the end of the array...
arr.push(6)
console.log(`Updated array (push) : ${arr}`);

// Task-4 : use pop method to remove last element from the array...
arr.pop()
console.log(`Updated array (pop) : ${arr}`);

// Task-5 : use shift method to remove first element from the array...
arr.shift()
console.log(`Updated array (shift) : ${arr}`);

// Task-6 : use shift method to remove first element from the array...
arr.unshift(1)
console.log(`Updated array (unshift) : ${arr}`);

