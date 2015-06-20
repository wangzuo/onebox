var mustache = require('mustache');
var matcher = require('./matcher');
var engines = require('./engine');
var layout = require('./layout');

module.exports = function(link, cb) {
  var engineClass = 'github';
  var engineClass = matcher(link);

  if(!engineClass) throw new Error('engine not found');

  var engine = engines[engineClass];

  if(!engine.data && engine.html) {
    engine.html(link, (err, html) => {
      if(err) return cb(err);
      cb(null, html);
    });
  } else if(engine.data) {
    engine.data(link, (err, res) => {
      if(err) return cb(err);

      layout(engineClass, (err, template) => {
        if(err) return cb(err);

        var html = mustache.render(template, res);
        cb(null, html);
      });
    });
  }
};
