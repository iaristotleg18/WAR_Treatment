var ytReady = false;
var pendingScore = null; // null = nothing queued; true/false = queued playScore(fromStart) call
var scoreIsPlaying = false;
var usingFallback = false;
var fallbackTimer = null;

function onYouTubeIframeAPIReady(){
  window.ytPlayer = new YT.Player('yt-audio-frame', {
    height: '1', width: '1',
    videoId: '0NSYqnJrGkE',
    playerVars: { autoplay:0, controls:0, disablekb:1, modestbranding:1, rel:0, playsinline:1 },
    events: {
      'onReady': function(){
        if(usingFallback) return; // fallback already took over, don't double-embed
        ytReady = true;
        clearTimeout(fallbackTimer);
        // If the visitor already clicked "Run Sequence" before the API finished
        // loading, fire the play call now instead of silently dropping it.
        if(pendingScore !== null){
          playScore(pendingScore);
          pendingScore = null;
        }
      },
      'onError': function(e){
        console.warn('Score playback error (video may be blocked/restricted):', e && e.data);
      }
    }
  });
}

// If the API's postMessage handshake hasn't confirmed ready within 1.2s of the
// first play attempt (this is what fails under file://, since the page has no
// real origin), fall back to a plain autoplay iframe instead. A raw iframe
// embed doesn't need postMessage to start playing — YouTube's player handles
// autoplay internally once it loads, as long as the iframe was created inside
// a real user-gesture handler (a click), which begin() always is.
function useFallbackAudio(){
  if(usingFallback) return;
  usingFallback = true;
  var container = document.getElementById('yt-audio-frame');
  if(!container) return;
  var iframe = document.createElement('iframe');
  iframe.width = '1';
  iframe.height = '1';
  iframe.style.border = '0';
  iframe.allow = 'autoplay';
  iframe.src = 'https://www.youtube.com/embed/0NSYqnJrGkE?autoplay=1&controls=0&rel=0&modestbranding=1';
  container.appendChild(iframe);
  scoreIsPlaying = true;
}

function playScore(fromStart){
  if(!ytReady){
    pendingScore = fromStart;
    if(!fallbackTimer && !usingFallback){
      fallbackTimer = setTimeout(useFallbackAudio, 1200);
    }
    return;
  }
  try{
    if(window.ytPlayer && typeof window.ytPlayer.playVideo === 'function'){
      if(fromStart) window.ytPlayer.seekTo(0, true);
      window.ytPlayer.playVideo();
      scoreIsPlaying = true;
    }
  }catch(e){}
}
function pauseScore(){
  if(usingFallback) return; // no control channel available on the fallback iframe
  try{
    if(window.ytPlayer && typeof window.ytPlayer.pauseVideo === 'function'){
      window.ytPlayer.pauseVideo();
    }
  }catch(e){}
  scoreIsPlaying = false;
}
function toggleScore(){
  if(scoreIsPlaying){ pauseScore(); } else { playScore(false); }
}

// If this page is opened directly from disk (file://) instead of served over
// http(s), the primary YouTube API can fail to establish its control channel.
// A fallback (above) should still get audio playing in most cases, but leave
// a small note in case a browser blocks that too.
(function(){
  if(location.protocol !== 'file:') return;
  document.addEventListener('DOMContentLoaded', function(){
    var notice = document.createElement('div');
    notice.style.cssText = 'position:fixed; right:16px; bottom:16px; z-index:80;' +
      'font-family:Courier New,monospace; font-size:10px; letter-spacing:0.04em;' +
      'color:rgba(232,185,35,0.75); max-width:220px; text-align:right; line-height:1.4;';
    notice.textContent = 'Opened locally — if the score stays silent, see README';
    document.body.appendChild(notice);
  });
})();
