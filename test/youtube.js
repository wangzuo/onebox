var onebox = require('../');

onebox.preview('https://www.youtube.com/watch?v=Kznek1uNVsg', function(err, html) {
  if(err) throw err;
  console.log(html);
});
