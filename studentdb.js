"use strict";
class Data {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
const students = new Data();
students.add({
    id: 1,
    name: "Ajju",
    course: "CSE"
});
students.add({
    id: 5,
    name: "Shankar",
    course: "Civil"
});
console.log(students.getAll());
