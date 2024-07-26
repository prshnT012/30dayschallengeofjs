// Task-5 : Add static method in Person class 

class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    static greets(){
        console.log("General greeting message!!!");
    }
    greet(){
        console.log(`Greeting from ${this.name}`);
    }
}

Person.greets()


// Task-6 : 

class Student extends Person{
    constructor(studentId,name,age){
        super(name,age)
        this.studentId = studentId
        Student.totalStudentsCreated += 1
    }
    static totalStudentsCreated=0;
    getStudentId(){
        return this.studentId
    }
}

let s1 = new Student(1,"abhijeet",15)
let s2 = new Student(2,"ravan",14)
let s3 = new Student(3,"rahut",16)
let s4 = new Student(4,"amarjeet",15)
let s5 = new Student(5,"mubarak",13)

console.log("Total students enrolled till now is "+Student.totalStudentsCreated);
