const expect = require('expect');
const {
  generateMessage
} = require('./message');

describe('.generateMessage', () => {
  it('should generate correct message object', () => {
    const message = {
      from: 'k',
      text: 'hello'
    };

    const expectedMessage = generateMessage(message);

    expect(expectedMessage).toMatchObject(message);
    expect(typeof expectedMessage.createdAt).toBe('number');
  })
})