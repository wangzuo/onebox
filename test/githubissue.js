var onebox = require('../');

onebox.preview('http://github.com/wangzuo/onebox/issues/1', (err, html) => {
  if(err) throw err;
  console.log(html);
});