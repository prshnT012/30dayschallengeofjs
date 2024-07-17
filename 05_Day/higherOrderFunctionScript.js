let result = (fn1,fn2,value)=>{
    let fn1Result = fn1(value)
    let fn2Result = fn2(fn1Result);
    return fn2Result
}

function fn1(num){
    return num**2
}

function fn2(num){
    return num*10
}

console.log(result(fn1,fn2,5));