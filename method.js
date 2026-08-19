"use strict";
class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
}
const calculator = new Calculator();
console.log(calculator.add(10, 20));
console.log(calculator.subtract(20, 10));
