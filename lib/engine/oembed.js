var Json = require('../json');
var _providers = [
  /www\.flickr\.com\//, 'http://www.flickr.com/services/oembed.json',
  /(.*\.)?gfycat\.com\//, 'http://gfycat.com/cajax/oembed',
  /www\.kickstarter\.com\//, 'https://www.kickstarter.com/services/oembed',
  /www\.meetup\.com\//, 'http://api.meetup.com/oembed',
  /www\.ted\.com\//, 'http://www.ted.com/services/v1/oembed.json',
  /(.*\.)?vimeo\.com\//, 'http://vimeo.com/api/oembed.json'
];

module.exports = {
  match: function(link) {
    for(var i = 0, l = _providers.length; i < l; i+=2) {
      if(link.match(_providers[i])) return true;
    }

    return false;
  },

  data: function(link, cb) {
    for(var i = 0, l = _providers.length; i < l; i+=2) {
      if(link.match(_providers[i])) {
        var provider = _providers[i+1];
        Json.load(provider + '?url=' + encodeURIComponent(link), {}, function(err, res) {
          if(err) return cb(err);

          var raw = res.body;
          console.log(raw);
          return cb(null, raw);
        });
      }
    }
  }
};
