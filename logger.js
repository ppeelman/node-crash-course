const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    this.emit("message", { id: uuid.v4(), msg });
  }
}

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
