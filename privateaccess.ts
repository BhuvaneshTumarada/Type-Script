class BankAccount {
    private balance: number = 5000;
    showBalance(): void {
        console.log(this.balance);
    }
}
const account = new BankAccount();
account.showBalance();
console.log(account.balance);