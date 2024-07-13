//task : demonstrate the difference in behaviour between let and const when it comes to reassignment...

let subject = "Python"

console.log("current subject is : " + subject);

subject = "JavaScript"

console.log("After reassignment : " + subject);


const day = 1

day = 2

console.log(day);

// i notice that reassignment is possible in let but not it const....