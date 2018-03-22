/* global describe it */
const expect = require('chai').expect;

const imgur = require('./../lib/index');


describe('when upload img url', () => {
  it('it should return a imgur url link (success)', async () => {
    // intilize client id
    imgur.setClientId('c7a1bbbf5ba9e5a');
    const result = await imgur.uploadImgur('https://cdn.pixabay.com/photo/2015/03/12/12/43/test-670091_640.png');
    expect(result.success).to.be.true;
  });
  it('it should return a imgur url link (false)', async () => {
    // intilize client id
    imgur.setClientId('c7a1bbbf5ba9e5a');
    const result = await imgur.uploadImgur('null');
    expect(result.success).to.be.false;
    expect(result.url).to.equal('null');
    expect(result.message).to.be.a('string');
  });
});
