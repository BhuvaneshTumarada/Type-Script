class Person {
    name: string = "Bhuvanesh";
}
class Student extends Person {
    course: string = "CSE";
}
const student = new Student();
console.log(student.name);
console.log(student.course);