// Task-8: print number from 1 to 10 but skip number 5...

console.log("_________________________Task-8__________________________");

for(let i=1; i<=10;i++){
    if(i==5){
        continue
    }
    console.log(i);
}

//Task-9 : print numbers from 1 to 10 but stop loop when number 7 is encountered...

console.log("______________________Task-9___________________________");

for(let i=1;i<=10;i++){
    if(i==7){
        break
    }
    console.log(i);
}