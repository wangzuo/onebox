# onebox
[onebox](https://github.com/discourse/onebox) with node

> Onebox is a library for turning media URLs into simple HTML previews of the resource.

![preview](preview.png)

### Installation
``` sh
npm install onebox --save
```
### Usage
``` javascript
var onebox = require('onebox');
var link = 'http://github.com/wangzuo/onebox/issues/1';
onebox.preview(link, function(err, html) {
  if(err) throw err;
  console.log(html);
});
```
### Development preview server
``` sh
npm start
```
### Link support
- [ ] amazon
- [x] audio
- [x] douban
- [ ] github_blob
- [ ] github_commit
- [x] githubgist
- [x] githubissue
- [x] githubpullrequest
- [ ] google_calendar
- [ ] google_docs
- [ ] google_maps
- [x] googleplayapp
- [ ] html
- [x] image
- [ ] json
- [ ] pubmed
- [x] soundcloud
- [x] stackexchange (stackoverflow)
- [ ] standard_embed
- [ ] twitterstatus
- [x] video
- [ ] whitelisted_generic
- [ ] wikipedia
- [x] spotifytrack
- [x] spotifyalbum
- [ ] youku
- [x] youtube
- [x] music163playlist
- [x] music163album
- [x] music163song
- [ ] npm package page
- [ ] 404 error
- [ ] timeout error
- [x] open graph protocol
