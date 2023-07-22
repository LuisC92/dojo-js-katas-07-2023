const abbreviate = require("./abbreviate-names");

test("abbreviate function exists", () => {
  expect(typeof abbreviate).toBe("function");
});

test("abbreviate as one parameter", () => {
  expect(abbreviate.length).toBe(1);
});

test("abbreviate 'Alyson Hannigan'", () => {
  expect(abbreviate("Alyson Hannigan")).toBe("A.H");
});

test("abbreviate 'Cobie Smulders'", () => {
  expect(abbreviate("Cobie Smulders")).toBe("C.S");
});

test("abbreviate 'Neil Patrick Harris'", () => {
  expect(abbreviate("Neil Patrick Harris")).toBe("N.P.H");
});

test("abbreviate with null", () => {
  expect(abbreviate(null)).toBe("");
});

test("abbreviate with empty string", () => {
  expect(abbreviate("")).toBe("");
});

// TODO add your tests here
