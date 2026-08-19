function getData<T>(value: T): T {
    return value;
}
console.log(getData<string>("Hello"));
console.log(getData<number>(100));