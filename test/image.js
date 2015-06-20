var onebox = require('../');

var link = 'http://i.imgur.com/mB0ecEt.jpg';
onebox.preview(link, function(err, html) {
  if(err) throw err;
  console.log(html);
});
