const findTax = require('../../utils/findTax');
describe('given two params', () => {
    const arrayParams = ['3077', 'GST'];
    const doSplitting = [
        '3077',
        '2020/12/ababbbbbb-85574',
        '2021-11-24T14:32:57.527',
        '977.07',
        'GST'
    ];
      
    it('it should return false', ()=>{
        expect(findTax(arrayParams, 'random string')).toBe(false);
    });
    it('it should return true', ()=>{
        expect(findTax(arrayParams, doSplitting)).toBe(true);
    });
    it('it should return false', ()=>{
        expect(findTax(['3066','GST'], doSplitting)).toBe(false);
    });
});