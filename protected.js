"use strict";
class Person {
    name = "Bhuvanesh";
}
class Student extends Person {
    show() {
        console.log(this.name);
    }
}
const student = new Student();
student.show();
