"use strict";
class Person {
    name = "Bhuvanesh";
}
class Student extends Person {
    course = "CSE";
}
const student = new Student();
console.log(student.name);
console.log(student.course);
