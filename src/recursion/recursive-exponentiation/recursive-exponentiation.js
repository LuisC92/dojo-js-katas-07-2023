/*
Create the function pow, where you need to call pow(n, e) recursively.

2⁰ = 1
2¹ = 2 = 2 * 2⁰
2² = 2 * 2 = 2¹ * 2
2³ = 2 * 2 * 2 = 2² * 2
2⁴ ...

This function must be recursive: you can't use a loop.

You can't use Math.pow().

Add you own tests.

*/

// TODO add your code here

const pow = (n,e) => {
  if (e === 0) return 1;
  return n * pow(n, e - 1);
}



// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof pow, "function");
assert.strictEqual(pow.length, 2);
assert.strictEqual(
  pow.toString().includes("Math.pow"),
  false,
  "don't use Math.pow()"
);
assert.strictEqual(pow.toString().includes("for "), false, "don't use a loop");
assert.strictEqual(
  pow.toString().includes("while "),
  false,
  "don't use a loop"
);
assert.strictEqual(
  pow.toString().includes("pow("),
  true,
  "pow must be recursive"
);
// TODO add your tests:
assert.strictEqual(pow(2, 0), 1);
assert.strictEqual(pow(2, 1), 2);
assert.strictEqual(pow(2, 2), 4);
assert.strictEqual(pow(2, 3), 8);
assert.strictEqual(pow(2, 4), 16);
assert.strictEqual(pow(2, 5), 32);
assert.strictEqual(pow(3, 4), 81);

console.log('All tests passed!');
// End of tests
