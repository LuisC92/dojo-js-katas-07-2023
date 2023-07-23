const compare = require("./string-compare");

test("compare function exists", () => {
  expect(typeof compare).toBe("function");
});

test("compare as two parameters", () => {
  expect(compare.length).toBe(2);
});

// TODO add your tests here
test("compare function exists", () => {
  expect(typeof compare).toBe("function");
});

test("compare returns correct results", () => {
  expect(compare("a", "a")).toBe(1);
  expect(compare("a", "b")).toBe(0);
  expect(compare("aa", "ba")).toBe(1);
  expect(compare("cassis", "castor")).toBe(3);
  expect(compare("tacos", "poulpe")).toBe(-1);
  expect(compare(null, "a")).toBe(-1);
  expect(compare("hello", "world")).toBe(1);
});