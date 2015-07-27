var fs = require('fs');
var path = require('path');
var mustache = require('mustache');
var onebox = require('../');

module.exports = onebox({
  render: function(engine, data, cb) {
    var tpath = path.join(__dirname, 'templates', engine+'.mustache');
    fs.readFile(tpath, function(err, buf) {
      if(err) return cb(err);

      var template = buf.toString();
      var html = mustache.render(template, data);
      cb(null, html);
    });
  }
});
