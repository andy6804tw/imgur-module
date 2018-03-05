// const imgur = require('imgur-module');
const imgur = require('../lib/index');

// intilize client id
imgur.setClientId('c7a1bbbf5ba9e5a');
// uploading URL image
imgur.uploadImgur('https://goo.gl/KvXypJ').then((result) => {
  console.log(result);
});
