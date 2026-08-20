type Marks=Record<string,number>;
const marks:Marks={
    Java:100,
    React:95
};
console.log(marks);

//record with specific keys
type Role = "admin" | "user" | "guest";
type Permissions = Record<Role, boolean>;
const permissions: Permissions = {
    admin: true,
    user: true,
    guest: false
};
console.log(permissions);