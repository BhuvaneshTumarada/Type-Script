let id: string | number;
id = 1;
id = "EMP1";
console.log(id);

function display(value: string | number): void {
    console.log(value);
}
display(100);
display("Hello");