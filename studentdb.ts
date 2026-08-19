interface student{
    id:number;
    name:string;
    course:string;
}
class Data<T>{
    private items:T[] =[];
    add(item:T):void{
        this.items.push(item);
    }
    getAll():T[]{
        return this.items;
    }
}
const students=new Data<student>();
students.add({
    id:1,
    name:"Ajju",
    course:"CSE"
});
students.add({
    id:5,
    name:"Shankar",
    course:"Civil"
});
console.log(students.getAll());