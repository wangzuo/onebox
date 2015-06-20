var request = require('superagent');

module.exports = {
  load(url, headers, cb) {
    request
      .get(url)
      // .set(headers)
      .end(cb);
  }
};
