let arr = [1,2,3,4,5,6,7,8,9]

// Task-10 : use for loop to iterate the elements in the array of arr
console.log("Using for loop");
for(let i=0;i<arr.length;i++){
    process.stdout.write(arr[i] + ' ')
}
console.log();

// Task-10 : use for loop to iterate the elements in the array
console.log("Using for each loop");
arr.forEach(element => {
    process.stdout.write(element + ' ')
});
console.log();