function run(a:number, b:number):number;
function run(a:string, b:string):string;
function run(a:any, b:any):any{
    return a+b;
}
console.log(run("Hello ","Marcus"));
console.log(run(20,30));