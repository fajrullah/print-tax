
var es = require('event-stream');

module.exports = function calculate(stream, parse, callback) {
    let total = 0;
    stream
        .pipe(es.split())
        .pipe(
            es
                .mapSync(function (line) {
                    console.log(total);
                    total += parse(line);    
                }
                )).on('error', function (err) {
                    console.log('Error while reading file.', err);
                }).on('end', function () {
                    console.log('Tax calculation finished');
                    console.log(total);
                    callback(total);
                });
};

