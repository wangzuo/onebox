module.exports = {
  match: function(link) {
    return link.match(/^http(?:s)?:\/\/(?:www\\.)?(?:(?:\w)+\.)?(twitter)\.com(?:\/)?(?:.)*\/status(es)?/);
  },

  data: function() {
    var m =  link.match(/^http(?:s)?:\/\/(?:www\\.)?(?:(?:\w)+\.)?(twitter)\.com(?:\/)?(?:.)*\/status(es)?/);
  }
};
