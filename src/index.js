const loaderUtils = require('loader-utils');

function cleanupLoader(source) {
  this.raw = true;
  const {test} = loaderUtils.getOptions(this);
  this._compiler.hooks.done.tap('emit', (test) => cleanupUnwantedJsFiles(test));
  this.callback(null, source);
}

function cleanupUnwantedJsFiles(test) {
  return (compilation, callback) => {
    for (let key in compilation.options.entry) {
      let entry = compilation.options.entry[key];
      if (typeof entry !== 'string' && entry.pop) {
        entry = entry.pop();
      }
      if (typeof entry === 'string' && test.test(entry)) {
        delete compilation.assets[`${key}.js`];
        delete compilation.assets[`${key}.js.map`];
      }
    }
    callback();
  }
}

module.exports = cleanupLoader;
module.exports.raw = true;
