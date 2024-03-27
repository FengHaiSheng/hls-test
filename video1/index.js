import Hls from 'hls.js'

if (Hls.isSupported()) {
  var video = document.getElementById('video');

  var hls = new Hls({
    "debug": true,
    "enableWorker": true,
    "lowLatencyMode": true,
    "backBufferLength": 90
  });

  hls.on(Hls.Events.MEDIA_ATTACHED, function () {
    console.log('video and hls.js are now bound together !');
  });

  hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
    console.log('manifest loaded, found ' + data.levels.length + ' quality level');
  });

  hls.loadSource(`/test1.m3u8`);
  hls.attachMedia(video);
}
