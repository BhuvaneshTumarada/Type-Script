interface employee{
    id:number;
    name:string;
    email:string;
    salary:number;
    department:string;
}
type EmployeeBasicInfo=Pick<
    Employee,
    "id"|"name"|"department"
>;
const employee:EmployeeBasicInfo={
    id:1,
    name:"Sujeeth",
    department:"Director"
};
console.log(employee);