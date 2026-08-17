"use strict";
function sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}
console.log(sum(10, 50));
console.log(sum(1, 2, 3));
