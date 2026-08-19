class BankAccount {
    private balance: number;
    constructor(balance: number) {
        this.balance = balance;
    }
    deposit(amount: number): void {
        this.balance += amount;
        console.log("Balance:", this.balance);
    }
    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Balance:", this.balance);
        } else {
            console.log("Insufficient balance");
        }
    }
    getBalance(): void {
        console.log("Current balance:", this.balance);
    }
}
const account = new BankAccount(5000);
account.getBalance();
account.deposit(1000);
account.withdraw(2000);