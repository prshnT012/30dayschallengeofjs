// Data type : 

let num = 1
let subject = "JavaScript"
let active = true
let obj = {
    'key' : num
}

let arr = [subject,num]

console.log(num + " - typeof " + typeof num);
console.log(subject + " - typeof " + typeof subject);
console.log(active + " - typeof " + typeof active);
console.log(Object.entries(obj) + " - typeof - " + typeof obj);
console.log(arr + " - typeof " + typeof arr);
