var mustache = require('mustache');
var matcher = require('./matcher');
var engines = require('./engine');
var layout = require('./layout');

module.exports = function(link, cb) {
  if(!link) return cb(null, '');

  var engineClass = matcher(link) || 'ogp';

  // if(!engineClass) throw new Error('engine not found');

  var engine = engines[engineClass];
  if(!engine.data) throw new Error('engine data method not defined');

  engine.data(link, function(err, res) {
    if(err) return cb(err);

    layout(engineClass, function(err, template) {
      if(err) return cb(err);

      var html = mustache.render(template, res);
      cb(null, html);
    });
  });
};
