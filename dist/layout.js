'use strict';

var fs = require('fs');
var path = require('path');

module.exports = function (engineClass, cb) {
  var tPath = path.join(__dirname, 'templates', '' + engineClass + '.mustache');

  fs.readFile(tPath, function (err, buf) {
    if (err) return cb(err);
    var template = buf.toString();
    cb(null, template);
  });
};