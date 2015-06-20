module.exports = {
  regexp: '^https?:\/\/(?:www\.)?(?:m\.)?(?:youtube\.com|youtu\.be)\/.+$',

  data: function(link, cb) {
    var videoId = link.split('?v=')[1];
    var embedParams = '?';

    cb(null, {
      videoId: videoId,
      embedParams: embedParams
    });
  }
};
