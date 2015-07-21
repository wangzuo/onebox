module.exports = {
  match: function(link) {
    return link.match(/^(https?:\/\/)?([\da-z\.-]+)(youku.com\/)(.)+\/?$/);
  },

  data: function(link, cb) {
    var m = link.match(/^(https?:\/\/)?([\da-z\.-]+)(youku.com\/)(.)+\/?$/);
    cb(null, null);
  }
};
