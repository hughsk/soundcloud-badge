var div = require('./')({
    client_id: 'ded451c6d8f9ff1c62f72523f49dab68'
  , song: 'https://soundcloud.com/devolverdigital/sun-araw-horse-steppin'
  , dark: false
  , getFonts: true
}, function(err, src, json) {
  var audio = new Audio
  audio.src = src
  setTimeout(function() {
    audio.play()
  }, 500)
})
