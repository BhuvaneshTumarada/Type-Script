"use strict";
// Original employee
const employee = {
    id: 101,
    name: "Bhuvanesh",
    email: "bhuvanesh@gmail.com",
    department: "Development",
    salary: 50000
};
const update = {
    department: "Software Development"
};
const basicInfo = {
    id: 101,
    name: "Bhuvanesh",
    department: "Development"
};
const publicEmployee = {
    id: 101,
    name: "Bhuvanesh",
    email: "bhuvanesh@gmail.com",
    department: "Development"
};
// READONLY
const readOnlyEmployee = employee;
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
