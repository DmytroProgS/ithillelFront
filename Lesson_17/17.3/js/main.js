class BankAccount {

    constructor(stateOfAccount) {
        this.stateOfAccount = stateOfAccount;
    }
    
    getBalance() {
       return this.stateOfAccount;
    }
    deposit(money) {
        this.stateOfAccount += money;
        return this.stateOfAccount;
    }

    withdraw(money) {
        this.stateOfAccount -= money;
        return this.stateOfAccount;
    }

}
    
const account1 = new BankAccount(1000);
console.log(account1.getBalance());
account1.deposit(500);
console.log(account1.getBalance());
account1.withdraw(200);
console.log(account1.getBalance());