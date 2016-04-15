var request = require('request');

module.exports = {
  load: function(url, headers, cb) {
    request.get(url, cb);
  }
};
