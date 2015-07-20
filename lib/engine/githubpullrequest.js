var Json = require('../json');

module.exports = {
  regexp: "^http(?:s)?:\/\/(?:www\.)?(?:(?:\w)+\.)?github\.com\/(.+)\/(.+)\/pull\/(\\d+)",

  data: function(link, cb) {
    var m = link.match(/^http(?:s)?:\/\/(?:www\.)?(?:(?:\w)+\.)?github\.com\/(.+)\/(.+)\/pull\/([\d]+)/);
    var url = [
      'https://api.github.com/repos/',
      m[1],
      '/',
      m[2],
      '/pulls/',
      m[3]
    ].join('');

    Json.load(url, {
      Accept: 'application/vnd.github.v3.text+json'
    }, function(err, res) {
      if(err) return cb(err);
      var raw = res.body;

      var result = {
        link: url,
        user: raw.user,
        commits: raw.commits,
        changed_files: raw.changed_files,
        additions: raw.additions,
        deletions: raw.deletions,
        title: raw.title
      };

      cb(null, result);
    });
  }
};
