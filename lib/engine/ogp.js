var html = require('../html');

module.exports = {
  data: function(link, cb) {
    html(link, function(err, $) {
      if(err) return cb(err);

      var res = {};

      $('meta').each(function(i, el) {
        var $this = $(this);
        var name = $this.attr('name');
        var property = $this.attr('property');
        var content = $this.attr('content');

        // open graph protocol
        if(property && content) {
          var m = property.match(/og:(.*)/);
          if(m) res[m[1]] = content;
        }

        // twitter card api
        if(name && content) {
          var m = name.match(/twitter:(.*)/);
          if(m && !res[m[1]]) res[m[1]] = content;
        }
      });

      if(!res.title) {
        var title = $('title').text();
        if(title) res.title = title;
      }

      cb(null, res);
    });
  }
};

