var t = require('tap');
var onebox = require('..');

var link = 'https://www.youtube.com/watch?v=Kznek1uNVsg';
var embed = '<iframe width="480" height="270" src="https://www.youtube.com/embed/Kznek1uNVsg" frameborder="0" allowfullscreen></iframe>';

t.plan(1);

onebox.preview(link, function(err, html) {
  t.equal(html, embed);
});
