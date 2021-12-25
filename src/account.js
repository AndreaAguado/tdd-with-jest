const account = {
  balance: 500,

  getBalance() {
    return this.balance;
  },

  deposit(amount) {
    if (this.balance < 5000) {
      this.balance = this.balance + amount;
    }
    // else {
    //   this.balance = this.balance;
    // }

  },

  withdraw(amount) {
    this.balance = this.balance - amount;
  },
};

module.exports = account;
