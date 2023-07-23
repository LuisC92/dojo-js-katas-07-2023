/*
In cryptography, a Caesar cipher is a simple encryption technique, in which each letter in text is replaced by a letter some fixed number of positions down the alphabet.

For example, with a right shift of 3, a becomes d, b becomes e, and so on until w which become z. Then x, y and z become a, b and c.

Create a function `cipher` which encrypts a word (only in lowercase) using Caesar cipher, where the shift value (which can be positive or negative) is a parameter.

  word:      shift:   result:
* "abcd"     1        "bcde"
* "abcd"     -1       "zabc"
* "tacos"    3        "wdfrv"
* "zebra"    2        "bgdtc"

If `word` is null or not a string, or if `shift` is null or not a number, throw a TypeError.

Add you own tests.

*/

// TODO add your code here

const cipher = (word, shift) => {
  if (typeof word !== "string" || shift === null || typeof shift !== "number") throw new TypeError("Both word and shift must be valid inputs.");

  if (word === "") return ""

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const length = alphabet.length;

  return word
    .split("")
    .map((char) => {

      if (!char.match(/[a-z]/)) return char;

      const index = (alphabet.indexOf(char) + shift + length) % length;

      return alphabet[index];
    })

    .join("");
};

// Begin of tests
const assert = require("assert");

// TODO add your tests:
try {
  assert.strictEqual(typeof cipher, "function");
  assert.strictEqual(cipher.length, 2);
  assert.strictEqual(cipher("abcd", 1), "bcde");
  assert.strictEqual(cipher("abcd", -1), "zabc");
  assert.strictEqual(cipher("tacos", 3), "wdfrv");
  assert.strictEqual(cipher("zebra", 2), "bgdtc");
  assert.strictEqual(cipher("hello", 5), "mjqqt");
  assert.strictEqual(cipher("world", -3), "tloia");
  assert.strictEqual(cipher("", 10), "");
  assert.strictEqual(cipher("123", 2), "123");

  assert.throws(() => cipher(null, 1), TypeError);
  assert.throws(() => cipher("test", "abc"), TypeError);

  console.log("All tests passed!");
} catch (error) {
  console.error("Test failed:", error.message);
}

// End of tests
