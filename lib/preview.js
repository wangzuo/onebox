var matcher = require('./matcher');

module.exports = function(url, cb) {
  var engine = matcher(url);
  // if(!engine) cb(null, '');
  engine.toHtml(url, cb);
};
