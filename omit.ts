interface Employee{
    id:number;
    name:string;
    email:string;
    salary:number;
}
type PublicEmployee=Omit<Employee,"salary">;
const employee : PublicEmployee={
    id:1,
    name:"John",
    email:"john@gmail.com", 
}
console.log(employee);