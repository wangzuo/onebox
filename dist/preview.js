'use strict';

var matcher = require('./matcher');

module.exports = function (url, cb) {
  var engine = matcher(url);

  if (!engine) return '';
  if (!cb) return engine.toHtml(url);

  engine.toHtml(url, cb);
};