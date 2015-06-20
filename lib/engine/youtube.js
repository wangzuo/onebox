module.exports = {
  regexp: '^https?:\/\/(?:www\.)?(?:m\.)?(?:youtube\.com|youtu\.be)\/.+$',

  html(link, cb) {
    var videoId = link.split('?v=')[1];
    var embedParams = '?';

    var html = `<iframe width="480" height="270" src="https://www.youtube.com/embed/${videoId}${embedParams}" frameborder="0" allowfullscreen></iframe>`;
    cb(null, html);
  }
};
