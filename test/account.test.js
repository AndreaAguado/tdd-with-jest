const account = require('../src/account');

test("getBalance() returns 500", () => {
    expect(account.getBalance()).toEqual(500);
})

// test("deposit() returns 'Amount must be number > 0'", () => {
//     expect(account.deposit()).toEqual("Amount must be number > 0")
// })

test("After executing deposit(50) getBalance() returns 4050", () => {
    account.balance = 4000;
    account.deposit(50);
    expect(account.getBalance()).toEqual(4050);
})

test("deposit() method does nothing when the account balance before depositing is 5000 or more", () => {
    account.balance = 6000;
    account.deposit(50);
    expect(account.getBalance()).toEqual(account.balance);
})

test("After executing withdraw(50) getBalance() returns 450", () => {
    if (account.withdraw(50)) {
        expect(account.getBalance()).toEqual(4500);
    }
})