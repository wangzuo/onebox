module.exports = {
  match: function(link) {
    return link.match(/^(https?:)?\/\/.*\.(mov|mp4|webm|ogv)(\?.*)?$/i);
  },

  data: function(link, cb) {
    cb(null, {
      url: link
    });
  }
};
