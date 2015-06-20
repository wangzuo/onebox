module.exports = {
  match: function(link) {
    return link.match(
      /^(https?:)?\/\/.+\.(png|jpg|jpeg|gif|bmp|tif|tiff)(\?.*)?$/i);
  },

  data: function(link, cb) {
    cb(null, {
      url: link
    });
  }
};
