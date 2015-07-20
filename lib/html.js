var request = require('superagent');
var cheerio = require('cheerio');

// todo: custom user-agent support with superagent

module.exports = function(link, cb) {
  request.get(link).end(function(err, res) {
    if(err) return cb(err);
    cb(null, cheerio.load(res.text));
  });
};
