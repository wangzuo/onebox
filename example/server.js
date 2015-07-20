var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var onebox = require('../');
var links = require('./links');

app.set('view engine', 'ejs');

app.get('/', function(req, res, next) {
  onebox.preview(req.query.onebox, function(err, html) {
    res.render(path.join(__dirname, 'index'), {
      link: req.query.onebox,
      onebox: html,
      links: links
    });
  });
});

app.listen(9000, function() {
  console.log('server listen on 9000');
});
