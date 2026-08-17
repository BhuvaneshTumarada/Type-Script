interface Person {
    name: string;
}
interface Student extends Person {
    course: string;
}
const student: Student = {
    name: "Bhuvanesh",
    course: "CSE"
};
console.log(student);