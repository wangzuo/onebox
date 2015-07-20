module.exports = {
  match: function(link) {
    return link.match(/^(https?:)?\/\/.*\.(mp3|ogg|wav)(\?.*)?$/);
  },

  data: function(link, cb) {
    return cb(null, {
      url: link
    });
  }
};
