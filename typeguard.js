"use strict";
function display(value) {
    if (typeof value === "string") {
        console.log(value.length);
    }
    else {
        console.log(value.toFixed(2));
    }
}
//using Instance Of\\
class Dog {
    bark() {
        console.log("Woof");
    }
}
class Cat {
    meow() {
        console.log("Meow");
    }
}
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
makeSound(new Dog());
makeSound(new Cat());
