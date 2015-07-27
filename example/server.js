var path = require('path');
var express = require('express');
var links = require('./links');
var preview = require('./preview');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res, next) {
  preview(req.query.onebox, function(err, html) {
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
