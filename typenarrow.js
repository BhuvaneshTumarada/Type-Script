"use strict";
function print(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value);
    }
}
print("typescript");
print(100);
