const countChar = require("./count-letters");

test("countChar function exists", () => {
  expect(typeof countChar).toBe("function");
});

test("countChar as two parameters", () => {
  expect(countChar.length).toBe(2);
});

test("countChar with empty string and 'a'", () => {
  expect(countChar("", "a")).toBe(0);
});

test("countChar with 'a' and 'a'", () => {
  expect(countChar("a", "a")).toBe(1);
});

test("countChar with 'aaaaabbbaa' and 'a'", () => {
  expect(countChar("aaaaabbbaa", "a")).toBe(7);
});

test("countChar with 'bbacbaaa' and 'c'", () => {
  expect(countChar("bbacbaaa", "c")).toBe(1);
});

test("countChar with 'bbcc' and 'a'", () => {
  expect(countChar("bbcc", "a")).toBe(0);
});

test("countChar with null string and 'a'", () => {
  expect(countChar(null, "a")).toBe(-1);
});

test("countChar with 'abc' and null character", () => {
  expect(countChar("abc", null)).toBe(-1);
});

test("countChar with 'abc' and 'ab' character", () => {
  expect(countChar("abc", "ab")).toBe(-1);
});

test("countChar with 'abc' and 'b' character", () => {
  expect(countChar("abc", "b")).toBe(1);
});


// TODO add your tests here
