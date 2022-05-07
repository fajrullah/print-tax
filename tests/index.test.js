const index = require('../index');
describe('index negative', () => {
    beforeEach(() => {
        console.error = jest.fn();
        console.log = jest.fn();
        stream = jest.fn();
    });
    it('tests index called console.log four times', async () => {
        index();
        expect(console.log).toHaveBeenCalledWith('Please specify the user name,e.g. --user=yourUser');
        expect(console.log).toBeCalledTimes(3);
      });

    it('tests index called console.error 1 times', async () => {
        index();
        expect(console.error).toBeCalledTimes(1);
    });

    it('tests index called console.log once', async () => {
        index({ user: 'Test', type: 'GST' });
        expect(console.log).toHaveBeenCalledWith('Please specify the data file, e.g. --file=yourFile');
        expect(console.error).toBeCalledTimes(1);
        expect(stream).toBeCalledTimes(0);
      });

});

describe('index test', () => {
    it.only('tests index called console.error 1 times', async () => {
        console.error = jest.fn();
        console.log = jest.fn();
        stream = jest.fn();
        const user = '123';
        const type = 'GST';
        const file = './fixture/transaction-30lines.csv';
        index({ user, type, file });
        expect(console.error).toBeCalledTimes(0);
       
    });
});
