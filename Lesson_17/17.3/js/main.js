class BankAccount {

    constructor(stateOfAccount) {
        this.stateOfAccount = stateOfAccount;
    }
    
    getBalance() {
       return this.stateOfAccount;
    }
    deposit(money) {
        return this.stateOfAccount;
    }

    withdraw(money) {

    }

}
    
    const account1 = new BankAccount(1000);
    console.log(account1.getBalance()); // 1000
    account1.deposit(500);
    console.log(account1.getBalance()); // 1500
    account1.withdraw(200);
    console.log(account1.getBalance()); // 1300