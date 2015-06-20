var onebox = require('../');

var link = 'http://music.163.com/#/song?id=724595';

onebox.preview(link, function(err, html) {
  if(err) throw err;
  console.log(html);
});
