const taxCalculate = require('../../modules/taxCalculator');
const fs = require('fs');
describe('given streams and data', () => {
    
    const arrayParams = ['3077','GST'];

    const file = './fixture/transaction-30lines.csv';
    
    it('it should return 162.45', done =>{
        const stream = fs.createReadStream(file);
    
        taxCalculate(stream, arrayParams, function(total) {
            expect(total).toBe(162.45);
            done();
        });
       
    });

});
