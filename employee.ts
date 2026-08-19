type Employee = {
    id: number;
    name: string;
    department: string;
};
enum EmployeeRole {
    Manager = "Manager",
    Developer = "Developer",
    Tester = "Tester"
}
type EmployeeDetails = Employee & {
    role: EmployeeRole;
};
const employees: EmployeeDetails[] = [
    {
        id: 1,
        name: "John",
        department: "Development",
        role: EmployeeRole.Developer
    },
    {
        id: 2,
        name: "David",
        department: "Testing",
        role: EmployeeRole.Tester
    },
    {
        id: 3,
        name: "Robert",
        department: "Management",
        role: EmployeeRole.Manager
    }
];
employees.forEach((employee) => {
    console.log(employee);
});