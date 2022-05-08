'use strict';

const taxCalculate = require('./modules/taxCalculator');
const fs = require('fs');
const args = require('yargs').argv;

const file = args.file;
const user = args.user;
const type = args.type;

const index = (args = {}) => {
    
    if(!user || !args.user){
        console.log('Please specify the user name,e.g. --user=yourUser');
    }
    
    if(!file || !args.file){
        console.log('Please specify the data file, e.g. --file=yourFile');
    }
    
    if(!type || !args.type){
        console.log('Please specify the tax type, e.g. --type=yourType');
    }
    
    try {

        const stream = fs.createReadStream(file || args.file);
    
        taxCalculate(stream, [user, type], function(total) {
            const result = `For tax ${type}, customer ${user} has declared $${total}`;
            console.log(result);
        });
        
    } catch (error) {
        console.error(error);
    }
};

index(args);

module.exports = index;
