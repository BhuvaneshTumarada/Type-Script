interface Student {
    name: string;
    skills: string[];
}
const student: Student = {
    name: "Arjun",
    skills: [
        "Java",
        "React",
        "TypeScript"
    ]
};
console.log(student.skills);