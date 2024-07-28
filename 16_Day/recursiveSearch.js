// Task-7 : recursive function to perform the binary search on sorted array. return the index of the target element..

let arr = [2,4,5,7,9,10,14,19,23,30]

function binarySearch(arr,low,high,elem){
    if(low > high){
        console.log("on this");
        return -1;
    }
    let mid = low + Math.floor((high - low) / 2);

    if(arr[mid] == elem){
        return mid;
    }
    else if(arr[mid] > elem){
        return binarySearch(arr,low,mid-1,elem);
    }
    else{
        return binarySearch(arr,mid+1,high,elem);
    }
}
let elem = 23
console.log(`index of ${elem} in the arr is ${binarySearch(arr,0,arr.length-1,elem)}.`);

// task-8 : count the occurrences of a target element in the array.

arr = [1,2,3,4,5,7,3,6,3,2,9,1,4,1,7,8]

function countOccurrences(arr,target){
    if(arr.length === 0){
        return 0;
    }
    if(arr[0] === target){
        return 1 + countOccurrences(arr.slice(1),target);
    }
    return countOccurrences(arr.slice(1),target);
}
elem = 1
console.log(`Occurrence of ${elem} in the array is ${countOccurrences(arr,elem)}.`);