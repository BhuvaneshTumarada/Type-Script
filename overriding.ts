class Animal {
    sound(): void {
        console.log("Animal sound");
    }
}
class Dog extends Animal {
    sound(): void {
        console.log("Bark");
    }
}
const dog = new Dog();
dog.sound();