var onebox = require('..');
var link = 'http://movie.douban.com/subject/10440138/';

onebox.preview(link, function(err, html) {
  if(err) throw err;
  console.log(html);
});