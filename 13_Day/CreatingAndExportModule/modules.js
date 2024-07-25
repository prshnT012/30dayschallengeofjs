// Task-01

function addition(...args){
    let sum = 0;
    args.forEach((elem)=>{
        sum += elem
    })
    return sum
}

// Task-02

const person = {
    name : "Ricky ponting",
    greet : function () {
        console.log(`Greeting from ${this.name}`);
    }
}


module.exports = {addition,person}