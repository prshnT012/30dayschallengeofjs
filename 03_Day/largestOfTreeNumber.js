// wap to find the largest number using nested if else...

let a = 10,b = 200,c = 100

let largest

if(a > b){
    if(a > c){
        largest = a
    }else{
        largest = c
    }
}else{
    if(b > c){
        largest = b
    }else{
        largest = c
    }
}

console.log(`Largest number among ${a}, ${b} and ${c} is ${largest}.`);