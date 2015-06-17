'use strict';

function toHtml(url) {
  var videoId = url.split('?v=')[1];
  return '<iframe width="480" height="270" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>';
}

module.exports = {
  regx: new RegExp('^https?://(?:www.)?(?:m.)?(?:youtube.com|youtu.be)/.+$'),
  toHtml: toHtml
};