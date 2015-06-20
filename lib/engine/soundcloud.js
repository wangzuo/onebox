var Json = require('../json');

module.exports = {
  regexp: '^https?:\/\/.*soundcloud\.com',

  data: function(link, cb) {
    var url = 'http://soundcloud.com/oembed.json?url='+link;
    console.log(url);

    Json.load(url, null, function(err, res) {
      if(err) return cb(err);

      cb(null, res.body);
    });
  }
};
