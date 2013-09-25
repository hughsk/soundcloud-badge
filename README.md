# soundcloud-badge [![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

A [SoundCloud](http://soundcloud.com/) "now playing"-type thing that you can
drop into [browserify](http://browserify.org/) demos. Makes it easy to stream
from SoundCloud and ensure you're giving the appropriate credit too.

[![soundcloud-badge](https://nodei.co/npm/soundcloud-badge.png?mini=true)](https://nodei.co/npm/soundcloud-badge)

## Usage ##

``` javascript
require('soundcloud-badge')({
    client_id: 'your API client ID'
  , song: 'https://soundcloud.com/dylan_king/modern-housing'
  , dark: true
  , getFonts: true
}, function(err, src, data, div) {
  if (err) throw err

  // Play the song on
  // a modern browser
  var audio = new Audio
  audio.src = src
  audio.play()

  // Metadata related to the song
  // retrieved by the API.
  console.log(data)
})
```

Just call `soundcloud-badge`, these options should do these things:

* `client_id`: your SoundCloud API client ID.
* `song`: the SoundCloud URL for your song: using
  [`soundcloud-resolve`](http://github.com/hughsk/soundcloud-resolve)
  you'll get the matching data for your song included.
* `dark`: `true` for black text/icons, and `false` for white. Defaults to
  `true`.
* `getFonts`: by default, the badge will pull in fonts from Google Fonts.
  Set this to `false` if you'd rather it not do that.
