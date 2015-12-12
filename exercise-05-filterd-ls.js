var fs = require('fs');
var filePath = process.argv[2];
var argExt = process.argv[3];

fs.readdir(filePath, filterFiles);

function filterFiles(err, files) {
    if(err) {
        throw err;
    }
    files.map(function(file, index) {
        var split = file.split('.');
        if(split.length === 1)  { // file with no extension
            return;
        }
        var ext = split.reverse()[0];
        if(ext === argExt) {
            console.log(file);
        }
    });
}
