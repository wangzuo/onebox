var request = require('superagent');

module.exports = {
  load: function(url, headers, cb) {
    request
      .get(url)
      // .set(headers)
      .end(cb);
  }
};
