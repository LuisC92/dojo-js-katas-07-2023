const isPalindrome = require("./palindrome");

test("isPalindrome function exists", () => {
  expect(typeof isPalindrome).toBe("function");
});

test("isPalindrome as one parameter", () => {
  expect(isPalindrome.length).toBe(1);
});

test("isPalindrome 'rotor'", () => {
  expect(isPalindrome("rotor")).toBe(true);
});

test("isPalindrome 'tacos'", () => {
  expect(isPalindrome("tacos")).toBe(false);
});

test("isPalindrome 'Kayak'", () => {
  expect(isPalindrome("Kayak")).toBe(true);
});

test("isPalindrome with null", () => {
  expect(isPalindrome(null)).toBe(true);
});

test("isPalindrome with empty string", () => {
  expect(isPalindrome("")).toBe(true);
});


// TODO add your tests here
