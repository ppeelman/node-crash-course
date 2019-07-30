/* const Person = require("./person.js"); */

/* import Person from "./person.js";
// => 'Unexpected identifier': Node hasn't implemented ES6 modules yet */

/* const person1 = new Person("Philippe", 28);

person1.greeting();
 */

const Logger = require("./logger");

// Create an instance of the Logger class
const logger = new Logger();

// Set up a callback for the 'message' event
logger.on("message", data => {
  console.log("Called listener: ", data);
});

// Emit an event (using the log method that extends the emit method)
logger.log("Hello world");
logger.log("Hello world 2");
logger.log("Hello world 3");
logger.log("Hello world 4");
