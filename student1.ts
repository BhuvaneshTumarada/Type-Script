type Student = {
    id: number;
    name: string;
    course: string;
    cgpa: number;
    skills: string[];
};
const student: Student = {
    id: 9,
    name: "Bhuvanesh",
    course: "CSE",
    cgpa: 8.5,
    skills: [
        "Java",
        "React",
        "TypeScript"
    ]
};
console.log(student);