var Engine = require('../engine');

class Twitter extends Engine {
  constructor(link) {
    super(link);
  }

  data() {
    return {
      link: this.link,
      tweet: this._tweet(),
      timestamp: this._timestamp(),
      title: this._title(),
      avatar: this._avatar(),
      favorites: this._favorites(),
      retweets: this._retweets()
    };
  }
}

module.exports = Twitter;
// var request = require('superagent');

// function toHtml(url, cb) {
//   request
//     .get(`https://api.twitter.com/1/statuses/oembed.json?url=${url}`)
//     .end((err, res) => {
//       if(err) return cb(err);
//       cb(null, res.body.html);
//     });
// }

// module.exports = {
//   regx: new RegExp('^http(?:s)?://(?:www\\.)?(?:(?:\\w)+\\.)?(twitter)\\.com(?:/)?(?:.)*/status(es)?/'),
//   toHtml: toHtml
// };
