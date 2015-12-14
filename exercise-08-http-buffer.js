var bl = require('bl');
var http =require('http');

http.get(process.argv[2] ,function(response) {
    response.setEncoding('utf8');
    response.pipe(bl(printBuffer));
});

function printBuffer(err, data) {
    console.log(data.length);
    console.log(data.toString());
}
