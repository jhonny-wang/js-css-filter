/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var DEFAULT = require('./lib/default');
var FilterCSS = require('./lib/css');


/**
 * XSS过滤
 *
 * @param {String} css 要过滤的CSS代码
 * @param {Object} options 选项：whiteList, onAttr, onIgnoreAttr
 * @return {String}
 */
function filterCSS (html, options) {
  var xss = new FilterCSS(options);
  return xss.process(html);
}


// 输出
exports = module.exports = filterCSS;
exports.FilterCSS = FilterCSS;
for (var i in DEFAULT) exports[i] = DEFAULT[i];



// 在AMD下使用
if (typeof define === 'function' && define.amd) {
  define(function () {
    return module.exports;
  });
}

// 在浏览器端使用
if (typeof window !== 'undefined') {
  window.filterCSS = module.exports;
}
