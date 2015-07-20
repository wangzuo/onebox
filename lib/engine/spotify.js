module.exports = {
  match: function(link) {
    return link.match(/^http(?:s)?:\/\/(play|open)\.spotify\.com\/(album|track)\/(.*)/);
  },

  data: function(link, cb) {
    var m = link.match(/^http(?:s)?:\/\/(play|open)\.spotify\.com\/(album|track)\/(.*)/);
    var type = m[2];
    var id = m[3];

    cb(null, {
      uri: 'spotify:' + type + ':' + id
    });
  }
};
