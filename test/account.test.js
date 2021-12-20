/*
Write a function findMultiples(base, limit) that takes a value, integer,
and returns a list of its multiples up to another value, limit.
If limit is a multiple of integer, it should be included as well.
There will only ever be positive integers passed into the function,
not consisting of 0. The limit will always be higher than the base.

Examples:
findMultiples(2, 6) // return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
*/

const account = require("../src/account");

// write test cases to ensure findMultiples() works as expected
test("account.getBalance() should return 500", function() {
    account.balance = 500;
    expect(account.getBalance()).toEqual(500);
});

test("balance should be 510 if I deposit 10", function() {
    account.balance = 500;
    account.deposit(10);
    expect(account.getBalance()).toEqual(510);
});

test("balance should be 480 if I withdraw 20", function() {
    account.balance = 500;
    account.withdraw(20);
    expect(account.balance).toEqual(480);
});

test("balance should be 5000 if I deposit when the balance is already 5000", function() {
    account.balance = 5000;
    account.deposit(10);
    expect(account.balance).toEqual(5000);
});

test("balance should be 0 if I withdraw when the balance is already 0", function() {
    account.balance = 0;
    account.withdraw(10);
    expect(account.balance).toEqual(0);
});
