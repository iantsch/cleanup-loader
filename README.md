# cleanup-loader

[![licence](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat-square)]() [![tag](https://img.shields.io/badge/tag-v0.1.1-lightgrey.svg?style=flat-square)]()

Prevent webpack from emitting unwanted .js/.js.map files from certain files

![cleanup-loader](https://raw.githubusercontent.com/iantsch/cleanup-loader/master/assets/cleanup-loader.svg?sanitize=true)

## Installation

```sh
$ npm i --save-dev cleanup-loader
```

## Usage

```js
module.exports = {
  module : {
    rules:[
    // Useage with text-extract plugin
    {
      test: /\.scss$/,
      use: ExctractSass.extract({
        use: [
        // ... after all style loaders
        {
          loader: 'cleanup-loader',
          options: {
            test: /\.s?css$/
          }
        }]
      })
    },{
    // Useage with image optimization
      test: /\.(jpe?g|png|gif|svg|eot|ttf|woff2?)$/,
      use: [
      // ... after all your image loaders
      {
        loader: 'cleanup-loader',
        options: {
          test: /\.(jpe?g|png|gif|svg|eot|ttf|woff2?)$/
        }
      }]
    }]
  }
}
```

## Options

| Parameter | Type | Description |
|---|---|---|
| test | ``regex`` | generated .js/.js.map files from tested files are prevented from emitting |

## License

MIT
