'use strict';

var request = require('superagent');

module.exports = {
  load: function load(url, headers, cb) {
    request.get(url)
    // .set(headers)
    .end(cb);
  }
};