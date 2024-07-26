// Task-3 : extends person class
class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    greet(){
        console.log(`Greeting from ${this.name}`);
    }
}

class Student extends Person{
    constructor(studentId,name,age){
        super(name,age)
        this.studentId = studentId
    }
    getStudentId(){
        return this.studentId
    }
}

const arpit = new Student(1,"arpit",23)

console.log(arpit.getStudentId());

// Task-4 : override greet method 

Student.prototype.greet = function(){
    console.log(`Greeting from student id ${this.studentId}.`);
}

arpit.greet()