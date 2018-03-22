[![NPM version][npm-image]][npm-url] 
[![GitHub license][travis-image]][travis-url]
[![Coverage Status](https://coveralls.io/repos/github/andy6804tw/imgur-module/badge.svg?branch=master)](https://coveralls.io/github/andy6804tw/imgur-module?branch=master)
[![GitHub license][license-image]][license-url]
# imgur-module (imgur 圖片上傳)

## Module Usage

### Installation
Install the project dependencies.You can use npm or yarn(recommended) for dependency management。

```bash
## npm
npm install imgur-module --save

## yarn 
yarn add imgur-module
```

### Usage

You can through this website to get your project's client id.

https://api.imgur.com/oauth2/addclient

```js
// Requiring the module
const imgur = require('imgur-module');

// intilize client id
imgur.setClientId('Your Client Id');

// uploading URL image
imgur.uploadImgur('Your Image URL').then((result) => {
  console.log(result);
});

```

## License
#### MIT


[npm-image]: https://img.shields.io/badge/npm-v1.1.0-blue.svg
[npm-url]: https://www.npmjs.com/package/imgur-module
[travis-image]: https://travis-ci.org/andy6804tw/imgur-module.svg?branch=master
[travis-url]: https://travis-ci.org/andy6804tw/imgur-module
[license-image]: https://img.shields.io/npm/l/express.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com
[license-url]: https://github.com/andy6804tw/imgur-module/blob/master/LICENSE
