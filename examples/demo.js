// const = require('imgur-module');
const imgur = require('../lib/index');

imgur.setClientId('bc736c3f2e36e86');
imgur.uploadImgur('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6KBeA__nNc6Uvz_i_YTJZ9D0u2tqiBSicVNeuiGqKykZQWjWa').then((result) => {
  console.log(result);
});
