var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function(req, res) {
  var readStream = fs.createReadStream(filePath);

  readStream.on('open', function() { // Read file
    readStream.pipe(res);
  });

  readStream.on('error', function(err) { // File error
    res.end(err);
  });
});

server.listen(port);
