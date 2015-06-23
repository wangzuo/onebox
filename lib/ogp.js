module.exports = function($) {
  var res = {};

  $('meta').each(function(i, el) {
    var $this = $(this);

    var property = $this.attr('property');
    var content = $this.attr('content');

    if(property && content) {
      var m = property.match(/og:(.*)/);
      if(m) res[m[1]] = content;
    }
  });

  return res;
};
