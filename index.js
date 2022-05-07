'use strict';
const taxCalculate = require('./taxCalculator');
const fs = require('fs');
const parse = require('./taxParser');
const { exit } = require('process');
const args = require('yargs').argv;

const file = args.file;
const user = args.user;
const type = args.type;

if(!user){
    console.log('Please specify the user name,e.g. --user=yourUser');
    asdasd
    exit(1);
}

if(!file){
    console.log('Please specify the data file, e.g. --file=yourFile');
    exit(1);
}

if(!type){
    console.log('Please specify the tax type, e.g. --type=yourType');
    exit(1);
}

try {
    const stream = fs.createReadStream(file);

    taxCalculate(stream, parse(user), function(total) {
        console.log(`For tax ${type}, customer ${user} has declared $${total}`);
    });
} catch (error) {
    console.error(error);
    exit(1);
}

