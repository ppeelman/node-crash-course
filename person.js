/* // Module wrapper function
(function(exports, require, module, __filename, __dirname) {
  // code below is automatically inserted here
  //
});
 */
console.log(__dirname, __filename);

/* const person = {
  name: "John Doe",
  age: 30
}; */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  }
}

module.exports = Person;
