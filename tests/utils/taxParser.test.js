const taxParser = require('../../utils/taxParser');
describe('given string and array', () => {
    const doSplitting = [
        '3077',
        '2020/12/ababbbbbb-85574',
        '2021-11-24T14:32:57.527',
        '977.07',
        'GST'
    ];
      
    it('it should return false', ()=>{
        expect(taxParser('random string')).toBe(false);
    });
    it('it should return result 977.07 * 0.10 = 97.71', ()=>{
        const doingParsing = taxParser(doSplitting);
        expect(doingParsing).toBeGreaterThanOrEqual(97.70);
        expect(doingParsing).toBeLessThan(97.72);
    });
    it('it should return 0', ()=>{
        expect(taxParser(['3066','GST'], doSplitting)).toBe(0);
    });
});