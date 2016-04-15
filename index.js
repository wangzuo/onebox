var matcher = require('./lib/matcher');
var engines = require('./lib/engine');

module.exports = function(options) {
  var render = options.render;

  return function(link, cb) {
    if(!link) return cb(null, '');

    var engineName = matcher(link) || 'ogp';
    var engine = engines[engineName];
    if(!engine.data) throw new Error('engine data method not defined');

    engine.data(link, function(err, data) {
      if(err) return cb(err);

      cb(null, data);
   });
  };
};
