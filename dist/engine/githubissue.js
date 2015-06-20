'use strict';

var Json = require('../json');

module.exports = {
  regexp: '^http(?:s)?://(?:www.)?(?:(?:w)+.)?github.com/(.+)/(.+)/issues/(\\d+)',

  data: function data(link, cb) {
    var m = link.match(/^http(?:s)?:\/\/(?:www\.)?(?:(?:\w)+\.)?github\.com\/(.+)\/(.+)\/(issues)\/([\d]+)/);
    var url = 'https://api.github.com/repos/' + m[1] + '/' + m[2] + '/issues/' + m[4];

    Json.load(url, {
      Accept: 'application/vnd.github.v3.text+json'
    }, function (err, res) {
      if (err) return cb(err);
      var raw = res.body;

      var result = {
        link: link,
        title: 'Issue: ' + raw.title,
        content: raw.body,
        labels: raw.labels,
        user: raw.user,
        created_at: raw.created_at,
        closed_at: raw.closed_at,
        closed_by: raw.closed_by,
        avatar: 'https://avatars1.githubusercontent.com/u/' + raw.user.id + '?v=2&s=96',
        repository_path: '',
        repository_url: ''
      };

      cb(null, result);
    });
  }
};