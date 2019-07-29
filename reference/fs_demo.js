// https://nodejs.org/dist/latest-v12.x/docs/api/fs.html
const fs = require("fs");
const path = require("path");

// Create folder (asynchronously): takes a callback
// https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_fs_mkdir_path_options_callback
// Synchronous version: fs.mkdirSync
fs.mkdir(path.join(__dirname, "/test"), {}, err => {
  if (err) throw err;
  console.log("Folder created...");
});

// Create and write to file
// https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello world!",
  err => {
    if (err) throw err;
    console.log("File written to...");

    // Append to file
    // https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_fs_appendfile_path_data_options_callback
    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      " I love Node.js!",
      err => {
        if (err) throw err;
        console.log("File appended to...");
      }
    );
  }
);

// Read file
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloworld.txt"),
  err => {
    if (err) throw err;
    console.log("File renamed...");
  }
);
