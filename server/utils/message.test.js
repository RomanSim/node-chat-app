
var expect = require('expect');
var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Jen';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('function');
        expect(message).toMatchObject({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', ()=> {
        var from = 'Roman';
        var latitude = 1;
        var longitude = 1;
        var url = 'https://www.google.com/maps?q=1,1';
        var message = generateLocationMessage(from, latitude, longitude);

        expect(typeof message.createdAt).toBe('function');
        expect(message).toMatchObject({from, url});
    });
});