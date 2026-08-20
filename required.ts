interface User{
    name:string;
    email?:string;
}
const user :Required<User>={
    name:"Harish",
    email:"harishshankar@gmail.com"
};
console.log(user);