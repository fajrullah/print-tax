
const es = require('event-stream');
const sanity = require('../utils/sanity');
const taxParser = require('../utils/taxParser');
const findTax = require('../utils/findTax');
module.exports = function calculate(stream, arrayParams, callback) {
    let total = 0;
    stream
        .pipe(es.split())
        .pipe(es.mapSync(function (line) {
                    const getOneLIne = sanity(line);
                    const doSplitting = getOneLIne.split(',');
                    const findOne = findTax(arrayParams, doSplitting);
                    if(findOne){
                        const taxAmount = taxParser(doSplitting);
                        total = total + taxAmount;
                    }
                       
                }))
                .on('error', function (err) {
                    console.log('Error while reading file.', err);
                })
                .on('end', function () {
                    console.log('Tax calculation finished');
                    console.log(total);
                    callback(total);
                });
};

