var html = require('../html');

module.exports = {
  match: function(link) {
    return link.match(new RegExp('^https?://play\\.(?:(?:\\w)+\\.)?(google)\\.com(?:/)?/store/apps/'));
  },

  data: function(link, cb) {
    var res = {};

    html(link, function(err, $) {
      if(err) return cb(err);

      res = {
        link: link,
        title: $('.document-title div').text(),
        developer: $('.document-subtitle.primary').text(),
        image: $('.cover-image').first().attr('src'),
        description: $('.text-body div').text(), // todo: max description chars with truncate
        price: $('.price.buy meta[itemprop=price]').first().attr('content')
      };

      if(res.price <= 0) res.price = 'Free';
      cb(null, res);
    });
  }
};
