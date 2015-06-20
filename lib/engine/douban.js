var html = require('../html');

module.exports = {
  regexp: '^(https?:\/\/)?([\da-z\.-]+)(douban.com\/)(.)+\/?$',

  data: function(link, cb) {
    html(link, function(err, $) {
      if(err) return cb(err);

      cb(null, {
        link: link,
        title: $('title').text(),
        image: $('img[rel*="v:"]').attr('src'),
        description: $('meta[name=description]').attr('content')
      });
    });
  }
};
