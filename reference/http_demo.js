const http = require("http");

// Create server object
http
  .createServer((req, res) => {
    res.write("Hello world");
    res.end();
  })
  .listen(5000, () => console.log("Server running"));
// In a browser, go to localhost:5000
// This is the simplest web server imaginable
