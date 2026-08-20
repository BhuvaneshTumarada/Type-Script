interface user{
    id:number;
    name:string;
    email?:string;
}
function getUserInfo(
    users:user,
    key: keyof user
){
    return users[key];
}
const users:user={
    id:1,
    name:"Ram"
}; 
console.log(getUserInfo(users,"name"));
console.log(users.email ?? "Email not available");
console.log(users.email?.toUpperCase());