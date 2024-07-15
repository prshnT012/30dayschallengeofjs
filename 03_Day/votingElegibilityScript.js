// Task2: wap to check if a person is eligible to vote...

let age = 10

if(age >= 18 && age <= 120){
    console.log(`You are eligible to vote..`);
}
else if(age>0 && age < 18){
    console.log(`You are not eligible to vote because your age is less than 18..`);
}
else{
    console.log("Enter the valid age!!!");
}
