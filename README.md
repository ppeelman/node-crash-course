# Node

`node`  
REPL: Read-Eval-Print-Loop  
https://nodejs.org/api/repl.html

`npm install -S uuid`  
`npm install -D nodemon`  
**nodemon** is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node, to use nodemon replace the word node on the command line when executing your script.

Source: https://www.npmjs.com/package/nodemon

**uuid**: this defines a Uniform Resource Name namespace for
UUIDs (Universally Unique IDentifier), also known as GUIDs (Globally
Unique IDentifier). A UUID is 128 bits long, and can guarantee
uniqueness across space and time.

Source: https://www.npmjs.com/package/uuid

`node index.js` (equivalent to `node index`)
File is run and output is printed to terminal

## CommonJS module specification

`const package = require('module-name')`

Export one value: `module.exports = value`
Export more than one value:

```
exports.a = 1
exports.b = 2
exports.c = 3
```

Some resources:

- https://flaviocopes.com/commonjs/
- https://www.freecodecamp.org/news/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8/

**Module wrapper function**: before compiling a module, Node wraps the module code in a function.

```
(function(exports, require, module, __filename, __dirname) {
  // code below is automatically inserted here
  //
});
```

Node does not execute any code you write in a file directly. It executes this wrapper function which will have your code in its body. This is what keeps the top-level variables that are defined in any module scoped to that module.

That's also why the code has access to:

- module (eg. module.exports)
- **exports**
- require
- \_\_filename
- \_\_dirname

### Why not ES6 modules?

Node hasn't implemented ES6 modules yet, you need to use Babel to use ES6 modules in Babel.

## Node.js core modules

Documentation: https://nodejs.org/dist/latest-v12.x/docs/api/

**Path** module: https://nodejs.org/dist/latest-v12.x/docs/api/path.html  
**File System** module: https://nodejs.org/api/fs.html  
**Operating System** module: https://nodejs.org/api/os.html  
**URL** module: https://nodejs.org/api/url.html

**Events** module: https://nodejs.org/api/events.html  
Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.

**HTTP** module: https://nodejs.org/api/http.html

Node core modules don't have to be installed via npm and can be imported using the module name only (require('path')).

# Heroku

1. Create an account on http://www.heroku.com
2. Install Heroku CLI on https://devcenter.heroku.com/articles/heroku-cli#download-and-install
3. Restart Visual Studio Code
4. Login to Heroku on the command line, by typing `heroku login`
5. Make sure that the directory is under Git version control
6. `heroku create`

# Miscellaneous learned

`git reset`  
Unstage all the staged files in the project
https://stackoverflow.com/a/39454637
