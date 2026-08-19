"use strict";
class BankAccount {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log("Balance:", this.balance);
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Balance:", this.balance);
        }
        else {
            console.log("Insufficient balance");
        }
    }
    getBalance() {
        console.log("Current balance:", this.balance);
    }
}
const account = new BankAccount(5000);
account.getBalance();
account.deposit(1000);
account.withdraw(2000);
