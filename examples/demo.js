// const imgur = require('imgur-module');
const imgur = require('../lib/index');

// intilize client id
imgur.setClientId('bc736c3f2e36e86');
// uploading URL image
imgur.uploadImgur('https://goo.gl/KvXypJ').then((result) => {
  console.log(result);
});
