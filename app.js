console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  removeHobby(hobby) {
    const index = this.hobbies.indexOf(hobby);
    if (index > -1) {
      this.hobbies.splice(index, 1);
    }
  }

  greeting() {
    console.log("Hello fellow person!");
  }
}

// Example usage
const person = new Person("John", 2, "New York", ["reading", "hiking"]);
person.greeting();

// Exercise 2 Section
console.log("\nEXERCISE 2:\n==========\n");

class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = "Full Stack Web Developer";
  }

  greeting() {
    console.log(`Hello! I'm ${this.name} and I'm a ${this.occupation}!`);
  }
}

// Example usage
const coder = new Coder("Alice", 1, "San Francisco", ["coding", "gaming"]);
coder.greeting();

// Exercise 3 Section
console.log("\nEXERCISE 3:\n==========\n");

// Create a Person instance
const person2 = new Person("Sarah", 3, "Chicago", ["painting", "cooking"]);
console.log("Person 2 Properties:");
console.log(person2);
console.log("\nPerson 2 Methods:");
person2.greeting();
person2.addHobby("gardening");
console.log("After adding hobby:", person2.hobbies);
person2.removeHobby("cooking");
console.log("After removing hobby:", person2.hobbies);

// Create a Coder instance
const coder2 = new Coder("Mike", 0, "Seattle", ["programming", "chess"]);
console.log("\nCoder 2 Properties:");
console.log(coder2);
console.log("\nCoder 2 Methods:");
coder2.greeting();
coder2.addHobby("rock climbing");
console.log("After adding hobby:", coder2.hobbies);
coder2.removeHobby("chess");
console.log("After removing hobby:", coder2.hobbies);

// Exercise 4 Section
console.log("\nEXERCISE 4:\n==========\n");

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num1, num2) {
    if (num2 === undefined) {
      this.result += num1;
    } else {
      this.result = num1 + num2;
    }
    return this.result;
  }

  subtract(num1, num2) {
    if (num2 === undefined) {
      this.result -= num1;
    } else {
      this.result = num1 - num2;
    }
    return this.result;
  }

  multiply(num1, num2) {
    if (num2 === undefined) {
      this.result *= num1;
    } else {
      this.result = num1 * num2;
    }
    return this.result;
  }

  divide(num1, num2) {
    if (num2 === undefined) {
      this.result /= num1;
    } else {
      this.result = num1 / num2;
    }
    return this.result;
  }

  displayResult() {
    console.log(`Current result: ${this.result}`);
  }
}

// Test the calculator
const calc = new Calculator();
console.log("Testing Calculator:");
calc.add(5, 3);
calc.displayResult();
calc.subtract(2);
calc.displayResult();
calc.multiply(4);
calc.displayResult();
calc.divide(2);
calc.displayResult();

// Test with single parameter
console.log("\nTesting with single parameter:");
calc.add(10);
calc.displayResult();
calc.subtract(3);
calc.displayResult();
calc.multiply(2);
calc.displayResult();
calc.divide(4);
calc.displayResult();
