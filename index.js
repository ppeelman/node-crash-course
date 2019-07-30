const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  /* switch (req.url) {
    case "/":
      fs.readFile(
        path.join(__dirname, "/public", "index.html"),
        "utf8",
        (err, content) => {
          if (err) throw err;
          resp.writeHead(200, { "Content-Type": "text/html" });
          resp.end(content);
        }
      );

    case "/api/users":
      const users = [
        {
          name: "Bob Smith",
          age: 40
        },
        {
          name: "Philippe Peelman",
          age: 29
        }
      ];

      resp.writeHead(200, { "Content-Type": "application/json" });
      resp.end(JSON.stringify(users));
  } */

  // Build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // Extension of file
  let extname = path.extname(filePath);

  // Initial content type
  let contentType = "text/html";

  // Check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // Read file
  fs.readFile(filePath, "utf8", (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          "utf8",
          (err, content) => {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content, "utf8");
          }
        );
      } else {
        // Some server error
        res.writeHead(500);
        res.end(`Server error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

// The host decides the port on which the server will run, which is stored in an environmental variable
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
