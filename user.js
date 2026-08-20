"use strict";
function getUserInfo(users, key) {
    return users[key];
}
const users = {
    id: 1,
    name: "Ram"
};
console.log(getUserInfo(users, "name"));
console.log(users.email ?? "Email not available");
console.log(users.email?.toUpperCase());
