// https://nodejs.org/dist/latest-v12.x/docs/api/path.html
const path = require("path");

// Base file name
// https://nodejs.org/dist/latest-v12.x/docs/api/path.html#path_path_basename_path_ext
console.log(path.basename(__filename));

// Directory name
// https://nodejs.org/dist/latest-v12.x/docs/api/path.html#path_path_dirname_path
console.log(path.dirname(__filename));

// File extension
// https://nodejs.org/dist/latest-v12.x/docs/api/path.html#path_path_extname_path
console.log(path.extname(__filename));

// Create path object
// https://nodejs.org/dist/latest-v12.x/docs/api/path.html#path_path_parse_path
console.log(path.parse(__filename));

// Concatenate paths
// https://nodejs.org/dist/latest-v12.x/docs/api/path.html#path_path_join_paths
console.log(path.join(__dirname, "test", "hello.html"));
