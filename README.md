# inspect-object
**Inspect-Object** is a node module that checks and returns all the available `functions` and `properties` of an object.

### Installation
To install **inspect-object** in your node/javascript application, run

```
  npm install --save-dev inspect-object
```

in your terminal. Note that the `--save-dev` flag is only needed if you want to add **inspect-object** as a development dependency to your *package.json* file.

### Usage
```javascript
var Inspector = require('inspect-object');

// `obj` is some object to inspect
console.log(Inspector.functions(obj)) // logs all the function attributes of 'obj' to the console

console.log(Inspector.properties(obj)) // logs all the property attributes of 'obj' to the console with their respective type.

console.log(Inspector.all(obj)) // logs all attribute of 'obj' (functions and properties) to the console
```
