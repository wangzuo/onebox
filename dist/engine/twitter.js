'use strict';

var request = require('superagent');

function toHtml(url, cb) {
  request.get('https://api.twitter.com/1/statuses/oembed.json?url=' + url).end(function (err, res) {
    if (err) return cb(err);
    cb(null, res.body.html);
  });
}

module.exports = {
  regx: new RegExp('^http(?:s)?://(?:www\\.)?(?:(?:\\w)+\\.)?(twitter)\\.com(?:/)?(?:.)*/status(es)?/'),
  toHtml: toHtml
};