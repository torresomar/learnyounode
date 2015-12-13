var fs = require('fs');

var filter = function filterByExtension(dir, ext, cb) {
    fs.readdir(dir, function(err, files) {
        if (err) {
            return cb(err); 
        }
        var filteredFiles = [];
        files.forEach(function(file, index) {
            var split = file.split('.');
            if(split.length === 1)  { // file with no extension
                return;
            }
            var fileExt = split.reverse()[0];
            if(fileExt === ext) {
                filteredFiles.push(file);
            }
        });
        cb(null, filteredFiles);
    });
};

module.exports = filter;
