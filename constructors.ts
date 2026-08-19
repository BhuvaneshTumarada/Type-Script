class Student {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
const student = new Student("Kalyan", 24);
console.log(student);