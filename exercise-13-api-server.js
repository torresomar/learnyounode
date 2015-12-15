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
    var iso = new Date(iso);
    console.log('iso', iso);
    var isoToJSON = {
      hour: 1,
      minute: 2,
      second: 3
    };
    res.write(JSON.stringify(isoToJSON));
    res.end();
  }
  if(path === '/api/unixtime') {
    var unix = query.unix;
    console.log('unix', unix);
    res.end();
  }
};

var parsetime = function parseTime() {

};


server.listen(port);

