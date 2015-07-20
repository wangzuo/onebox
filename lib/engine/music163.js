module.exports = {
  match: function(link) {
    return link.match(/^(https?:)?\/\/music\.163\.com\/#\/(song|playlist)\?id=([0-9]+)$/);
  },

  data: function(link, cb) {
    var m = link.match(/^(https?:)?\/\/music\.163\.com\/#\/(song|playlist)\?id=([0-9]+)$/);
    var type = m[2];
    var id = m[3];
    var height =  type === 'song' ? 66 : 430


    console.log(type, id);

    cb(null, {
      id: id,
      type: type === 'song' ? 2 : 0,
      height: height,
      frameHeight: height + 20
    });
  }
};
