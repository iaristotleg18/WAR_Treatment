var ytReady = false;
var pendingScore = null; // null = nothing queued; true/false = queued playScore(fromStart) call
var scoreIsPlaying = false;

function onYouTubeIframeAPIReady(){
  window.ytPlayer = new YT.Player('yt-audio-frame', {
    height: '1', width: '1',
    videoId: '0NSYqnJrGkE',
    playerVars: { autoplay:0, controls:0, disablekb:1, modestbranding:1, rel:0, playsinline:1 },
    events: {
      'onReady': function(){
        ytReady = true;
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
function playScore(fromStart){
  if(!ytReady){ pendingScore = fromStart; return; }
  try{
    if(window.ytPlayer && typeof window.ytPlayer.playVideo === 'function'){
      if(fromStart) window.ytPlayer.seekTo(0, true);
      window.ytPlayer.playVideo();
      scoreIsPlaying = true;
    }
  }catch(e){}
}
function pauseScore(){
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
// http(s), YouTube's embed API frequently can't establish its postMessage
// control channel — the score will silently fail to play. Surface that
// instead of leaving it a silent bug.
(function(){
  if(location.protocol !== 'file:') return;
  document.addEventListener('DOMContentLoaded', function(){
    var intro = document.getElementById('intro');
    if(!intro) return;
    var notice = document.createElement('p');
    notice.style.cssText = 'font-family:Courier New,monospace;font-size:11px;' +
      'letter-spacing:0.05em;color:#e8b923;max-width:520px;margin-top:18px;';
    notice.textContent = '⚠ Opened as a local file — the score may not play. ' +
      'Serve this folder (e.g. "python3 -m http.server") or host it, then reload.';
    intro.appendChild(notice);
  });
})();
