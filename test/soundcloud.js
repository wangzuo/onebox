var onebox = require('../');

var link = 'https://soundcloud.com/indomoviemania/die-antwoord-enter-the-ninja-chappie-ost';

onebox.preview(link, function(err, html) {
  if(err) throw err;

  console.log(html);
});
