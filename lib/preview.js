var mustache = require('mustache');
var matcher = require('./matcher');
var engines = require('./engine');
var layout = require('./layout');

module.exports = function(link, cb) {
  if(!link) return cb(null, '');

  var engineClass = 'github';
  var engineClass = matcher(link);

  if(!engineClass) throw new Error('engine not found');

  var engine = engines[engineClass];

  if(!engine.data && engine.html) {
    engine.html(link, function(err, html) {
      if(err) return cb(err);
      cb(null, html);
    });
  } else if(engine.data) {
    engine.data(link, function(err, res) {
      if(err) return cb(err);

      layout(engineClass, function(err, template) {
        if(err) return cb(err);

        var html = mustache.render(template, res);
        cb(null, html);
      });
    });
  }
};
