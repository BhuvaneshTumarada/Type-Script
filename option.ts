interface Student {
    name: string;
    age?: number;
}
const student1: Student = {
    name: "Ravi"
};
const student2: Student = {
    name: "John",
    age: 22
};
console.log(student1);
console.log(student2);