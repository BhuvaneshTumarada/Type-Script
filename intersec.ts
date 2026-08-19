type Person = {
    name: string;
};
type Employee = {
    salary: number;
};
type Worker = Person & Employee;
const worker: Worker = {
    name: "Babloo",
    salary: 50000
};
console.log(worker);