/*
Create a class `Person` which has :
* a constructor which initialize three attributes in this order : name (string), age (number) and weeaboo (boolean)
* a method `introduce` which returns "My name is {name} and I am {age}", where {name} and {age} are replaced with their respective attributes
* a method `greets` which receives a name (string) as parameter and returns "Hello {name}" if `weeaboo` is false, and "Ohayo {name}-chan" if `weeaboo` is true
* a method `match` which receives a person (Person) as parameter and returns true if the current `weeaboo` and argument `weeaboo` attributes are the same

*/

// TODO add your code here


class Person{
  constructor(name, age, weeaboo){
    this.name = name;
    this.age = age;
    this.weeaboo = weeaboo;
  }
  introduce(){
    return `My name is ${this.name} and I am ${this.age}`
  }
  greets(name){
    return !this.weeaboo ? `Hello ${name}` : `Ohayo ${name}-chan`
  }
  match(person) {
    return this.weeaboo === person.weeaboo;
  }
}



// Begin of tests
const assert = require("assert");
assert.strictEqual(typeof Person, "function", "Person class is undefined");
if (typeof Person === "function") {
  assert.strictEqual(new Person("John Doe", 30, false).name, "John Doe");
  assert.strictEqual(new Person("John Doe", 30, false).age, 30);
  assert.strictEqual(new Person("John Doe", 30, false).weeaboo, false);
  assert.strictEqual(
    typeof new Person().introduce,
    "function",
    "introduce method is undefined"
  );
  if (typeof new Person().introduce === "function") {
    assert.strictEqual(
      new Person("John Doe", 30, false).introduce(),
      "My name is John Doe and I am 30"
    );
  }
  assert.strictEqual(
    typeof new Person().greets,
    "function",
    "greets method is undefined"
  );
  if (typeof new Person().greets === "function") {
    assert.strictEqual(
      new Person("John Doe", 30, false).greets("Barbara"),
      "Hello Barbara"
    );
    assert.strictEqual(
      new Person("John Doe", 30, true).greets("Uzaki"),
      "Ohayo Uzaki-chan"
    );
  }
  assert.strictEqual(
    typeof new Person().match,
    "function",
    "match method is undefined"
  );
  if (typeof new Person().match === "function") {
    assert.strictEqual(
      new Person("John Doe", 30, false).match(
        new Person("Jane Doe", 30, false)
      ),
      true
    );
    assert.strictEqual(
      new Person("John Doe", 30, true).match(new Person("Jane Doe", 30, false)),
      false
    );
    assert.strictEqual(
      new Person("John Doe", 30, true).match(new Person("Jane Doe", 30, true)),
      true
    );
  }
}

assert.strictEqual(typeof Person, "function");

const person = new Person("John", 25, false);
assert.strictEqual(person.name, "John");
assert.strictEqual(person.age, 25);
assert.strictEqual(person.weeaboo, false);

assert.strictEqual(person.introduce(), "My name is John and I am 25");

assert.strictEqual(person.greets("Alice"), "Hello Alice");

const personWeeaboo = new Person("Alice", 30, true);
assert.strictEqual(personWeeaboo.greets("Bob"), "Ohayo Bob-chan");

assert.strictEqual(person.match(personWeeaboo), false);

const personWeeaboo2 = new Person("Alex", 28, true);
assert.strictEqual(personWeeaboo.match(personWeeaboo2), true);

console.log("All tests passed!");

// End of tests
