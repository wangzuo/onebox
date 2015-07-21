module.exports = {
  match: function(link) {
    return link.match(/^(https?:)?\/\/(docs\.google\.com)\/(spreadsheets|document|forms|presentation)\/d\/([\w-]*).+$/);
  },

  data: function(link, cb) {
    var m = link.match(/^(https?:)?\/\/(docs\.google\.com)\/(spreadsheets|document|forms|presentation)\/d\/([\w-]*).+$/);
    var type = m[3];
    var key = m[4];

    cb(null, {
      document: type === 'document',
      forms: type === 'forms',
      presentation: type === 'presentation',
      spreadsheets: type === 'spreadsheets',
      key: key
    });
  }
};
