var http = require('http');
var strftime = require('strftime');
var port = process.argv[2];
var url = require('url');

var server = http.createServer(function(req, res) {
  var urlObject = url.parse(req.url, true);
  var path = urlObject.pathname;
  var query = urlObject.query;
  router(path, query, res);
});

var router = function routeByPath(path, query, res) {
  if(path === '/api/parsetime') {
    var iso = new Date(query.iso);
    var isoToJSON = {
      hour: iso.getHours(),
      minute: iso.getMinutes(),
      second: iso.getSeconds()
    };
    res.write(JSON.stringify(isoToJSON));
    res.end();
  }
  if(path === '/api/unixtime') {
    var unix = new Date(query.iso).valueOf();
    var unixToJSON = {
      unixtime: +unix.toFixed(0)
    };
    res.write(JSON.stringify(unixToJSON));
    res.end();
  }
};

server.listen(port);

