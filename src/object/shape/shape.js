/*
Create three classes which inherit the class Shape:
* Rectangle
* Triangle
* Circle

For each classes:
* add a constructor and initialise the necessary attributes
* implement the area method.

Create a class Square, which inherits Rectangle:
* add a constructor which has only one argument
* call the constructor of its parent with the super keyword
* don't implement the area method!

*/

// Don't touch this!
class Shape {
  constructor() {}

  area() {
    throw new Error("You have to implement the area method!");
  }
}

// TODO add your code here

// * Rectangle
class Rectangle extends Shape{
  constructor(width, height){
    super()
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}
// * Triangle
class Triangle extends Shape{
  constructor(base, height){
    super()
    this.base = base;
    this.height = height;
  }
  area() {
    return 0.5 * this.base * this.height;
  }
}
// * Circle
class Circle extends Shape {
  constructor(radius){
    super()
    this.radius = radius;

  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}


// Begin of tests
const assert = require("assert");
assert.strictEqual(typeof Shape, "function", "Shape class is undefined");
assert.strictEqual(
  typeof new Shape().area,
  "function",
  "Shape area method is undefined"
);
assert.throws(() => {
  new Shape().area();
}, /^Error: You have to implement the area method!$/);
assert.strictEqual(
  typeof Rectangle,
  "function",
  "Rectangle class is undefined"
);
if (typeof Rectangle === "function") {
  assert.strictEqual(
    Rectangle.prototype instanceof Shape,
    true,
    "Rectangle inherits Shape"
  );
  assert.strictEqual(
    Rectangle.toString().includes("constructor"),
    true,
    "Rectangle has a constructor"
  );
  assert.strictEqual(new Rectangle(2, 3).area(), 6);
}
assert.strictEqual(typeof Triangle, "function", "Triangle class is undefined");
if (typeof Triangle === "function") {
  assert.strictEqual(
    Triangle.prototype instanceof Shape,
    true,
    "Triangle inherits Shape"
  );
  assert.strictEqual(
    Triangle.toString().includes("constructor"),
    true,
    "Triangle has a constructor"
  );
  assert.strictEqual(new Triangle(3, 4).area(), 6);
}
assert.strictEqual(typeof Circle, "function", "Circle class is undefined");
if (typeof Circle === "function") {
  assert.strictEqual(
    Circle.prototype instanceof Shape,
    true,
    "Circle inherits Shape"
  );
  assert.strictEqual(
    Circle.toString().includes("constructor"),
    true,
    "Circle has a constructor"
  );
  assert.strictEqual(Math.round(new Circle(1.954410048).area()), 12);
}
assert.strictEqual(typeof Square, "function", "Square class is undefined");
if (typeof Square === "function") {
  assert.strictEqual(
    Square.prototype instanceof Rectangle,
    true,
    "Square inherits Rectangle"
  );
  assert.strictEqual(
    Square.toString().includes("constructor"),
    true,
    "Square has a constructor"
  );
  assert.strictEqual(
    Square.toString().includes("area("),
    false,
    "Square does not overrides area()"
  );
  assert.strictEqual(new Square(3).area(), 9);
}

assert.strictEqual(typeof Rectangle, "function");
assert.strictEqual(typeof Triangle, "function");
assert.strictEqual(typeof Circle, "function");
assert.strictEqual(typeof Square, "function");

const rectangle = new Rectangle(5, 10);
assert.strictEqual(rectangle.area(), 50);

const triangle = new Triangle(6, 8);
assert.strictEqual(triangle.area(), 24);

const circle = new Circle(4);
assert.strictEqual(circle.area(), Math.PI * 4 * 4);

const square = new Square(7);
assert.strictEqual(square.area(), 49);

console.log("All tests passed!");
// End of tests
