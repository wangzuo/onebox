'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var Engine = require('../engine');

var Twitter = (function (_Engine) {
  function Twitter(link) {
    _classCallCheck(this, Twitter);

    _get(Object.getPrototypeOf(Twitter.prototype), 'constructor', this).call(this, link);
  }

  _inherits(Twitter, _Engine);

  _createClass(Twitter, [{
    key: 'data',
    value: function data() {
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
  }]);

  return Twitter;
})(Engine);

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