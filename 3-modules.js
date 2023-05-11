// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)

// import ... from ''
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

// imported without assigning it to a variable 
// (remember that when we import a module we invoke it, the the called function inside it will log to the console)
require('./7-mind-grenade');

// console.log(data);
sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);