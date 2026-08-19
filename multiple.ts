function two<A,B>(key:A,value:B){
    return{ key,value};
}
console.log(two<number,string>(1,"Ajax"));
console.log(two<string,number>("Docker",25));