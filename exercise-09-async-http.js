var bl = require('bl');
var http = require('http');

var urls = process.argv.slice(2, process.argv.length);
var urlContent = [];
var waiting = 0;

urls.forEach(function(url, index) {
  http.get(url ,function(response) {
    waiting++;
    response.setEncoding('utf8');
    response.pipe(bl(function(err, data) {
      urlContent[index] = data.toString();
    }));
    response.on('end', function() {
      waiting--;
      if (!waiting) {
        urlContent.map(function(page){console.log(page)});
      }
    });
  });
});


function printBuffers() {
  console.log(urlContent);
  urlContent.forEach(function(url) {
    console.log(url);
  });
  // console.log(urlContent[0]);
  // console.log(urlContent[1]);
  // console.log(urlContent[2]);
}
