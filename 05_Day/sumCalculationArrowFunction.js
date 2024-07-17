
let result = (num1,num2)=>{
    if(typeof num1 == "number" && typeof num2 == "number"){
        return num1+num2;
    }else{
        console.log("Give valid numbers..");
        return null
    }
}

console.log(result(5,"jjgj"));