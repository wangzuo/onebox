var engines = require('./engine');

module.exports = function(link) {
  var names = Object.keys(engines).filter((name) => {
    var engine = engines[name];
    return link.match(new RegExp(engine.regexp));
  });

  if(!names.length) return;

  var name = names[0];
  return name;
};
