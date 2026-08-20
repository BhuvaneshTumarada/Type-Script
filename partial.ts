function updateUser(
    id:Number,
    data:Partial<User>
) {
    console.log("Update user:",id);
    console.log(data);
}
updateUser(1,{name:"Marshall"})