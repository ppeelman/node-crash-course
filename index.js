const Person = require("./person.js");

/* import Person from "./person.js";
// => 'Unexpected identifier': Node hasn't implemented ES6 modules yet */

const person1 = new Person("Philippe", 28);

person1.greeting();
