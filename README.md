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
