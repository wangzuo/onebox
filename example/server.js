var http = require('http');
var onebox = require('..');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});

  onebox.preview(req.url.substr(1), function(err, html) {
    res.write(html);
    res.end();
  });
});


server.listen(7788);
