class Student {
    name: string = "Basheer";
    display(): void {
        console.log(this.name);
    }
}
const student = new Student();
student.display();