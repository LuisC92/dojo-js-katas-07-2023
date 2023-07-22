/*
Create a function `build` which returns a pyramid of `n` floors, from top to bottom, stored in a string array.

Example :

n = 5 :
[
    "    *    ",
    "   ***   ",
    "  *****  ",
    " ******* ",
    "*********"
]

If `n` is zero or negative, throw a RangeError.
If `n` is null or not a number, throw a TypeError.

*/

// TODO add your code here

// Create a function `build`
function build(number){
// If `n` is zero or negative, throw a RangeError.
if(number === 0 || number < 0) throw new RangeError("n must be greater than 0")

// If `n` is null or not a number, throw a TypeError.
if(number === null || typeof number !== "number") throw new TypeError("n must be a number")

  //  stored in a string array
  const pyramid = []
  const star = "*"
  const space = " "

  const width = 2 * number -1 

  // create a loop to create the rows
  for(let i = 0; i < number; i++){

    const starNumber = 2 * i + 1

    const spacesNumber = (width - starNumber) / 2

    const row = space.repeat(spacesNumber)+star.repeat(starNumber)+space.repeat(spacesNumber)

    pyramid.push(row)
    
  }

  // returns a pyramid of `n` floors
  return pyramid
}

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof build, "function");
assert.strictEqual(build.length, 1);
assert.deepStrictEqual(build(1), ["*"]);
assert.deepStrictEqual(build(2), [" * ", "***"]);
assert.deepStrictEqual(build(5), [
  "    *    ",
  "   ***   ",
  "  *****  ",
  " ******* ",
  "*********",
]);
assert.throws(() => {
  build(0);
}, RangeError);
assert.throws(() => {
  build(-1);
}, RangeError);
assert.throws(() => {
  build(null);
}, TypeError);
assert.throws(() => {
  build("a");
}, TypeError);
// End of tests
