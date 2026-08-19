"use strict";
class Animal {
    sound() {
        console.log("Animal sound");
    }
}
class Dog extends Animal {
    sound() {
        console.log("Bark");
    }
}
const dog = new Dog();
dog.sound();
