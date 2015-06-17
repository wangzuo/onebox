var t = require('tap');
var onebox = require('..');

t.equal(
  onebox.preview('https://www.youtube.com/watch?v=Kznek1uNVsg'),
  '<iframe width="480" height="270" src="https://www.youtube.com/embed/Kznek1uNVsg" frameborder="0" allowfullscreen></iframe>'
);
