'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = cleanupLoader;

var _loaderUtils = require('loader-utils');

function cleanupLoader(source) {
    var _getOptions = (0, _loaderUtils.getOptions)(this),
        test = _getOptions.test;

    this._compiler.plugin('emit', cleanupUnwantedJsFiles(test));
    this.callback(null, source);
}

function cleanupUnwantedJsFiles(test) {
    return function (compilation, callback) {
        for (var key in compilation.options.entry) {
            var entry = compilation.options.entry[key];
            if (typeof entry !== 'string' && entry.pop) {
                entry = entry.pop();
            }
            if (typeof entry === 'string' && test.test(entry)) {
                delete compilation.assets[key + '.js'];
                delete compilation.assets[key + '.js.map'];
            }
        }
        callback();
    };
}
module.exports = exports['default'];