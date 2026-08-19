"use strict";
class BankAccount {
    balance = 5000;
    showBalance() {
        console.log(this.balance);
    }
}
const account = new BankAccount();
account.showBalance();
console.log(account.balance);
