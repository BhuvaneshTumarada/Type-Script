function display<T>(data: T): void {
    console.log(data);
}
display<string>("React");
display<number>(22);
display<boolean>(true);