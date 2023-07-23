/*
Create a recursive function `fibo` that returns n'th element of Fibonacci sequence.

fibo(0) = 0
fibo(1) = 1
fibo(n) = fibo(n-1) + fibo(n-2)

Example:
fibo(4) = fibo(3) + fibo(2)

Replace fibo(x) call with their respective values :
fibo(4) = (fibo(2) + fibo(1)) + (fibo(1) + fibo(0))
fibo(4) = ((fibo(1) + fibo(0)) + 1) + (1 + 0)
fibo(4) = ((1 + 0) + 1) + (1 + 0)
fibo(4) = 3

This function must be recursive: you can't use a loop.

Add you own tests.

*/

// TODO add your code here

const fibo = (number) => {
  if (number === 0) return 0;

  if (number === 1) return 1;

  return fibo(number - 1) + fibo(number - 2);
}
  //!another way
// const fibo = (number, memo = {}) => {

  //   if (number in memo) return memo[number];

  //   if (number === 0) return 0;
  //   if (number === 1) return 1;

  //  return fibo(number - 1, memo) + fibo(number - 2, memo);
// };

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof fibo, "function");
assert.strictEqual(fibo.length, 1);
assert.strictEqual(fibo.toString().includes("for "), false, "don't use a loop");
assert.strictEqual(
  fibo.toString().includes("while "),
  false,
  "don't use a loop"
);
assert.strictEqual(
  fibo.toString().includes("fibo("),
  true,
  "fibo must be recursive"
);
// TODO add your tests:
assert.strictEqual(fibo(0), 0);
assert.strictEqual(fibo(1), 1);
assert.strictEqual(fibo(2), 1);
assert.strictEqual(fibo(3), 2);
assert.strictEqual(fibo(4), 3);
assert.strictEqual(fibo(5), 5);
assert.strictEqual(fibo(6), 8);
assert.strictEqual(fibo(7), 13);
assert.strictEqual(fibo(8), 21);
assert.strictEqual(fibo(9), 34);

console.log("All tests passed!");

// End of tests
