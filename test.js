
const { deposit, withdraw } = require('./main');

describe('Bank Transaction Processor', () => {
  // valid test
  test('deposit 0 -> +100 results in 100', () => {
    expect(deposit(0, 100)).toBe(100);
  });

  test('withdraw 200 -> withdraw 50 results in 150', () => {
    expect(withdraw(200, 50)).toBe(150);
  });

  // error handling
  test('withdraw more than balance should throw Insufficient funds', () => {
    expect(() => withdraw(50, 100)).toThrow('Insufficient funds');
  });

  test('deposit with non-number input should throw', () => {
    expect(() => deposit('0', 100)).toThrow('Invalid input');
  });

  //fail it
 // test('INTENTIONAL FAIL: deposit 50 should equal 0 (force failure)', () => {
    // This is wrong on purpose to trigger CI failure
   // expect(deposit(0, 50)).toBe(0);
//  });
});
