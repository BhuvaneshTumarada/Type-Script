function print(value:string | number){
    if(typeof value === "string"){
        console.log(value.toUpperCase());
    } else {
        console.log(value);
    }
}
print("typescript");
print(100);