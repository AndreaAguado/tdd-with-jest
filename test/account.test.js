const account = require('../src/account');

test("getBalance() returns 500", () => {
    expect(account.getBalance()).toEqual(500);
})

test("After executing deposit(50) getBalance() returns 4050", () => {
    account.balance = 4000;
    account.deposit(50);
    expect(account.getBalance()).toEqual(4050);
})

test("deposit() method does nothing when the account balance before depositing >= 5000", () => {
    account.balance = 6000;
    account.deposit(50);
    expect(account.getBalance()).toEqual(account.balance);
})

test("After executing withdraw(50) getBalance() returns 450", () => {
    if (account.withdraw(50)) {
        expect(account.getBalance()).toEqual(4500);
    }
})

test("withdraw() does nothing when balance before withdrawing < = 0", () => {
    account.balance = -40;
    account.withdraw(50);
    expect(account.getBalance()).toEqual(-40);

})