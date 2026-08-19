"use strict";
class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const student = new Student("Kalyan", 24);
console.log(student);
