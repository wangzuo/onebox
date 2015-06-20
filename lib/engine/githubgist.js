var _ = require('lodash');
var Json = require('../json');

module.exports = {
  match: function(link) {
    return link.match(/^http(?:s)?:\/\/gist\.github\.com\/(.+)\/(.+)/);
  },

  data: function(link, cb) {
    var m = link.match(/^http(?:s)?:\/\/gist\.github\.com\/(.+)\/(.+)/);
    var url = 'https://api.github.com/gists/' + m[2];

    Json.load(url, null, function(err, res) {
      var gist = res.body;

      cb(null, {
        title: 'gist.github.com',
        link: link,
        gist_files: _.values(gist.files)
      });
    });
  }
};
