class Person {
    protected name: string = "Bhuvanesh";
}
class Student extends Person {
    show(): void {
        console.log(this.name);
    }
}
const student = new Student();
student.show();