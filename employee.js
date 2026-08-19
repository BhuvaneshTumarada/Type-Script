"use strict";
var EmployeeRole;
(function (EmployeeRole) {
    EmployeeRole["Manager"] = "Manager";
    EmployeeRole["Developer"] = "Developer";
    EmployeeRole["Tester"] = "Tester";
})(EmployeeRole || (EmployeeRole = {}));
const employees = [
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
