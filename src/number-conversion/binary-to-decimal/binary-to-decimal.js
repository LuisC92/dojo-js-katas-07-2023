/*
Create a function `convert` which, given a binary string representation of a number, returns its decimal value.

Here's the numbers 0 to 9 represented as base 2 (binary):

   "0"	0
   "1"	1
  "10"	2
  "11"	3
 "100"	4
 "101"	5
 "110"	6
 "111"	7
"1000"	8
"1001"	9

You can't use the function parseInt.

Add you own tests.

Bonus:
* if the argument isn't a string, throw a TypeError with the message "Illegal argument"
* if the argument is an empty string, or if a digit isn't 1 or 0, throw an Error with the message "Illegal binary string"

*/

// TODO add your code here

const convert = (binaryString) => {
  if (typeof binaryString !== 'string') throw new TypeError('Illegal argument');
  

  if (!/^[01]+$/.test(binaryString))throw new Error('Illegal binary string');

  let decimalValue = 0;
  
  for (let i = 0; i < binaryString.length; i++) {
    decimalValue = decimalValue * 2 + Number(binaryString[i]);
  }

  return decimalValue;
};

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof convert, "function");
assert.strictEqual(convert.length, 1);
assert.strictEqual(
  convert.toString().includes("parseInt"),
  false,
  "don't use parseInt()"
);
// TODO add your tests:
// Valid binary strings
assert.strictEqual(convert("0"), 0);
assert.strictEqual(convert("1"), 1);
assert.strictEqual(convert("10"), 2);
assert.strictEqual(convert("11"), 3);
assert.strictEqual(convert("100"), 4);
assert.strictEqual(convert("101"), 5);
assert.strictEqual(convert("110"), 6);
assert.strictEqual(convert("111"), 7);
assert.strictEqual(convert("1000"), 8);
assert.strictEqual(convert("1001"), 9);

// Invalid binary strings
assert.throws(() => convert(), { name: 'TypeError', message: 'Illegal argument' });
assert.throws(() => convert(123), { name: 'TypeError', message: 'Illegal argument' });
assert.throws(() => convert("0102"), { name: 'Error', message: 'Illegal binary string' });
assert.throws(() => convert(""), { name: 'Error', message: 'Illegal binary string' });

console.log('All tests passed!');
// Bonus: exceptions

assert.throws(() => {
  convert(1);
}, /^TypeError: Illegal argument$/);
assert.throws(() => {
  convert("");
}, /^Error: Illegal binary string$/);
assert.throws(() => {
  convert("01A1");
}, /^Error: Illegal binary string$/);

// End of tests
