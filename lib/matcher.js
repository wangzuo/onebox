var engines = require('./engine');

module.exports = function(link) {
  var names = Object.keys(engines).filter(function(name) {
    var engine = engines[name];
    if(engine.regexp) {
      return link.match(new RegExp(engine.regexp));
    } else {
      return engine.match(link);
    }
  });

  if(!names.length) return;

  var name = names[0];
  return name;
};
