var fs = require('fs');
var filePath = process.argv[2];

var buff = fs.readFile(filePath, 'utf-8', function(err, data) {
  if(err) {
    throw err;
  }
  console.log(data.toString().split('\n').length - 1);
});

