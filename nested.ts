interface Address {
    city: string;
    state: string;
}
interface Student {
    name: string;
    address: Address;
}
const student: Student = {
    name: "Bhuvanesh",
    address: {
        city: "Bangalore",
        state: "Karnataka"
    }
};
console.log(student.address.city);