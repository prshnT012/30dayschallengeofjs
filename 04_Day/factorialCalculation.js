// Task-6: calculate the factorial of a number using do while loop...

let number = 0

let fact = 1

do{
    fact = fact * number;
    number--;
}while(number > 0)

console.log(fact);