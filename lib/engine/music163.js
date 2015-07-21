var _ids = {
  'playlist': 0,
  'album': 1,
  'song': 2,
};

var _heights = {
  'playlist': 430,
  'album': 430,
  'song': 66
};

module.exports = {
  match: function(link) {
    return link.match(/^(https?:)?\/\/music\.163\.com\/#\/(playlist|album|song)\?id=([0-9]+)$/);
  },

  data: function(link, cb) {
    var m = link.match(/^(https?:)?\/\/music\.163\.com\/#\/(playlist|album|song)\?id=([0-9]+)$/);
    var type = m[2];
    var id = m[3];

    var typeId = _ids[type];
    var height = _heights[type];
    var frameHeight = height + 20;

    cb(null, {
      id: id,
      type: typeId,
      height: height,
      frameHeight: frameHeight
    });
  }
};
