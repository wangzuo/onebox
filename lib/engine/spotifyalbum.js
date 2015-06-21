module.exports = {
  match: function(link) {
    return link.match(/^http(?:s)?:\/\/play\.spotify\.com\/album\/(.*)/);
  },

  data: function(link, cb) {
    var m = link.match(/^http(?:s)?:\/\/play\.spotify\.com\/album\/(.*)/);
    var track = m[1];

    cb(null, {
      uri: 'spotify:album:' + track
    });
  }
};
