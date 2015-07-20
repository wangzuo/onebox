var html = require('../html');

module.exports = {
  match: function(link) {
    return link.match(/^https?:\/\/(?:www)\.amazon\.(?<tld>com|ca|de|it|es|fr|co\.jp|co\.uk|cn|in|com\.br)\//);
  },

  data: function(link) {
    html(link, function(err, $) {
      if(err) return cb(err);

      var res = {};


      cb(null, res);
    });
  }
};
