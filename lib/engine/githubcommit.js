module.exports = {
  match: function(link) {
    return link.match(/^http(?:s)?:\/\/(?:www\.)?(?:(?:\w)+\.)?(github)\.com(?:\/)?(?:.)*\/commit\/(.*)/);
  },

  data: function(link, cb) {
    var m = link.match(/^http(?:s)?:\/\/(?:www\.)?(?:(?:\w)+\.)?(github)\.com(?:\/)?(?:.)*\/commit\/(.*)/);

    cb(null, null);
  }
};
