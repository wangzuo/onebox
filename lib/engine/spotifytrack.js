module.exports = {
  match: function(link) {
    return link.match(/^http(?:s)?:\/\/play\.spotify\.com\/track\/(.*)/);
  },

  data: function(link, cb) {
    var m = link.match(/^http(?:s)?:\/\/play\.spotify\.com\/track\/(.*)/);
    var track = m[1];

    cb(null, {
      uri: 'spotify:track:' + track
    });
  }
};
