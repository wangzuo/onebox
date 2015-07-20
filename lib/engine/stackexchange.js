var Json = require('../json');

module.exports = {
  match: function(link) {
    return link.match(/^http(?:s)?:\/\/stackoverflow\.com\/questions\/(.*)\/(.*)/);
  },

  data: function(link, cb) {
    var m = link.match(/^http(?:s)?:\/\/stackoverflow\.com\/questions\/(.*)\/(.*)/);
    var id = m[1];
    var url = 'https://api.stackexchange.com/2.1/questions/'+id+'?site=stackoverflow';

    Json.load(url, null, function(err, res) {
      if(err) return cb(err);

      var raw = res.body;
      var item = raw.items[0];

      cb(null, {
        title: item.title,
        owner: item.owner,
        link: item.link,
        tags: item.tags.join(', ')
      });
    });
  }
};
