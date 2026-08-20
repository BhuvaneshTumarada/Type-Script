interface Employee {
    id: number;
    name: string;
    email: string;
    department: string;
    salary: number;
}

// Original employee

const employee: Employee = {
    id: 101,
    name: "Bhuvanesh",
    email: "bhuvanesh@gmail.com",
    department: "Development",
    salary: 50000
};


// PARTIAL
// Used when updating only some properties

type EmployeeUpdate = Partial<Employee>;

const update: EmployeeUpdate = {
    department: "Software Development"
};


// PICK
// Select only required properties

type EmployeeBasic = Pick<
    Employee,
    "id" | "name" | "department"
>;

const basicInfo: EmployeeBasic = {
    id: 101,
    name: "Bhuvanesh",
    department: "Development"
};

// OMIT
// Remove salary

type PublicEmployee = Omit<
    Employee,
    "salary"
>;

const publicEmployee: PublicEmployee = {
    id: 101,
    name: "Bhuvanesh",
    email: "bhuvanesh@gmail.com",
    department: "Development"
};
// READONLY
const readOnlyEmployee: Readonly<Employee> = employee;
console.log("Original Employee:");
console.log(employee);

console.log("Update:");
console.log(update);

console.log("Basic Information:");
console.log(basicInfo);

console.log("Public Employee:");
console.log(publicEmployee);

console.log("Read Only Employee:");
console.log(readOnlyEmployee);