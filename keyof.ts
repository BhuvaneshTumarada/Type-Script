interface student{
    id:number,
    name:string,
    course:string
}
function getValue(
    students:student,
    key:keyof student
) {
    return student[key];
}
const student={
    id:1,
    name:"Bhagavan",
    course:"Artist"
};
console.log(getValue(student, "name"));