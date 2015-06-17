var matcher = require('./matcher');

module.exports = function(url) {
  var engine = matcher(url);

  if(!engine) return '';
  return engine.toHtml(url);
};
