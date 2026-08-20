interface Product{
    id:number;
    name:string;
    price:number;
}
const product : Readonly<Product>={
    id:1,
    name:"Laptop",
    price:65000
};
console.log(product);