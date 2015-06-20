var request = require('superagent');
var cheerio = require('cheerio');

module.exports = function(link, cb) {
  request.get(link).end((err, res) => {
    if(err) return cb(err);

    cb(null, cheerio.load(res.text));
  });
};
