var t = require('tap');
var onebox = require('..');

t.plan(1);

var link = 'https://twitter.com/markodugonjic/status/611216234907049984';
var embed = '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Over 600k websites on GitHub have this error:&#10;&lt;meta charset=&quot;UTF8&quot;&gt; <a href="https://twitter.com/codepo8">@codepo8</a> <a href="https://twitter.com/hashtag/smashingconf?src=hash">#smashingconf</a></p>&mdash; Marko Dugonjić (@markodugonjic) <a href="https://twitter.com/markodugonjic/status/611216234907049984">June 17, 2015</a></blockquote>\n<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>';

onebox.preview(link, function(err, html) {
  t.equal(html, embed);
});
