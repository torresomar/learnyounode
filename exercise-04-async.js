var fs = require('fs');
var filePath = process.argv[2];

function countLines(err, data) {
  console.log(err, data);
}

var buff = fs.readFile(filePath, 'utf-8', function(err, data) {
  if(err) {
    throw err;
  }

});

