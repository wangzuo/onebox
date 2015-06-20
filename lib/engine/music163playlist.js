module.exports = {
  match: function(link) {
    return link.match(/^(https?:)?\/\/music\.163\.com\/#\/playlist\?id=([0-9]+)$/);
  },

  data: function(link, cb) {
    var m = link.match(/^(https?:)?\/\/music\.163\.com\/#\/playlist\?id=([0-9]+)$/);

    cb(null, {
      id: m[2]
    });
  }
};
