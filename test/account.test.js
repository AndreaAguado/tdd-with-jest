const account = require('../src/account');

test("getBalance() returns 500", () => {
    expect(account.getBalance()).toEqual(500);
})

// test("deposit() returns 'Amount must be number > 0'", () => {
//     expect(account.deposit()).toEqual("Amount must be number > 0")
// })

test("After executing deposit(50) getBalance() returns 550", () => {
    if (account.deposit(50)) {
        expect(account.getBalance()).toEqual(550);
    }
})

test("After executing withdraw(50) getBalance() returns 450", () => {
    if (account.withdraw(50)) {
        expect(account.getBalance()).toEqual(450);
    }
})