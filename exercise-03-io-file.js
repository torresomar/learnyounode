var fs = require('fs');
var filePath = process.argv[2];

var buff = fs.readFileSync(filePath);
var count = buff.toString().split('\n').length - 1;
console.log(count);
