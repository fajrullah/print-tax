const sanity = require('../../utils/sanity');
describe('given string', () => {
    it('it should return "helloworld"', ()=>{
        expect(sanity('  hello world \t \t   ')).toBe('helloworld');
    });
});