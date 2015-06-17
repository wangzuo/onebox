'use strict';

var engines = require('./engine');

module.exports = function (url) {
  var names = Object.keys(engines).filter(function (name) {
    var engine = engines[name];
    return url.match(engine.regx);
  });

  if (!names.length) return;

  var name = names[0];
  var engine = engines[name];

  return engine;
};