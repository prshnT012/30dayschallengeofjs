// wap to compare two numbers using == and === operator...

let num1 = 45;
let num2 = "45";

if (num1 == num2) {
    console.log(`${num1} and ${num2} is equal by == operator`);
}else{
    console.log(`${num1} and ${num2} is not equal by == operator because value is not matched`);
}

if(num1 === num2){
    console.log(`${num1} and ${num2} is equal by === operator`);
}else{
    console.log(`${num1} and ${num2} is not equal by === operator because of type mismatch`);
}