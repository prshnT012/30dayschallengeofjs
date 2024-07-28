// Task-1 calculate factorial through recursion...

let num = 45

function factorial(num){
    if(num == 0 || num == 1)return num;
    return num*factorial(num-1)
}
console.log(`Factorial of num ${num} is ${factorial(num)}.`);

// Task-2 calculate fibonacci through recursion...

function fibonacci(num){
    if(num < 1){
        return NaN;
    }
    if(num > 0 && num < 3){
        return num - 1;
    }
    return fibonacci(num-1) + fibonacci(num-2);
}
console.log(`Fibonacci of num ${num} is ${fibonacci(num)}`);

// Better way to caculate fibonacci through recursion is dp.

const arr = new Array(num+1)

function fibonacciMemo(num){
    if(arr[num] !== undefined){
        return arr[num];
    }

    if(num > 0 && num < 3){
        arr[num] = num-1;
        return arr[num];
    }

    arr[num] = fibonacciMemo(num-1) + fibonacciMemo(num-2);

    return arr[num];
}


console.log(`Fibonacci of num ${num} is ${fibonacciMemo(num)}`);
