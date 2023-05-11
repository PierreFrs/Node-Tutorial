const path = require('path');

// logs the kind of separator your os uses
console.log(path.sep);

// prints a file path to the console
const filePath = path.join('\content', 'subfolder', 'test.txt');
console.log(filePath);

// prints the last step of the file to the console, here test.txt
const base = path.basename(filePath);
console.log(base);

// returns an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);