var filterByExt = require('./modules/filter-by-ext');

var filePath = process.argv[2];
var argExt = process.argv[3];

filterByExt(filePath, argExt, function(err, data) {
    if(err) {
        throw err;
    }
    console.log(data.join('\n'));
});
