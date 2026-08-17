(function(){
  // Beats: word cuts use ONLY vocabulary drawn from the treatment's timeline.
  // Images are your uploaded stills, placed between the word beats.
const beats = [
    {type:'word',  w:"THE WORLD IS A GHETTO", d:1250},
    {type:'word',  w:"A TRUE STORY", d:1000},
    {type:'word',  w:"1969", d:600},
    {type:'image', img:"17-street-scene.jpg", d:720},
    {type:'word',  w:"RAYMOND", d:380},
    {type:'word',  w:"WASHINGTON", d:380},
    {type:'word',  w:"FORMS", d:380},
    {type:'word',  w:"THE", d:250},
    {type:'word',  w:"BABY", d:380},
    {type:'word',  w:"AVENUES", d:380},
    {type:'image', img:"10-young-man-portrait.jpg", d:640},
    {type:'word',  w:"HE", d:250},
    {type:'word',  w:"WANTS", d:380},
    {type:'word',  w:"TO", d:250},
    {type:'word',  w:"PROTECT", d:380},
    {type:'word',  w:"THE", d:250},
    {type:'word',  w:"COMMUNITY", d:380},
    {type:'image', img:"01-police-beating.jpg", d:720},
    {type:'word',  w:"1971", d:600},
    {type:'image', img:"02-handshake.jpg", d:720},
    {type:'word',  w:"TOOKIE", d:380},
    {type:'word',  w:"WILLIAMS", d:380},
    {type:'word',  w:"AND", d:250},
    {type:'word',  w:"MAC", d:380},
    {type:'word',  w:"THOMAS", d:380},
    {type:'word',  w:"JOIN", d:380},
    {type:'word',  w:"FORCES", d:380},
    {type:'image', img:"12-six-men-leather.jpg", d:720},
    {type:'word',  w:"TOGETHER", d:380},
    {type:'word',  w:"THEY", d:250},
    {type:'word',  w:"FORM", d:380},
    {type:'word',  w:"THE", d:250},
    {type:'word',  w:"CRIPS", d:380},
    {type:'image', img:"03-three-friends.jpg", d:720},
    {type:'image', img:"08-war-press-lineup.jpg", d:640},
    {type:'image', img:"09-war-band-fence.jpg", d:640},
    {type:'image', img:"06-war-roadcrew.jpg", d:640},
    {type:'image', img:"04-saxophone.jpg", d:640},
    {type:'word',  w:"1972", d:600},
    {type:'image', img:"07-war-funkadelic-flyer.jpg", d:720},
    {type:'word',  w:"A", d:250},
    {type:'word',  w:"TEENAGER", d:380},
    {type:'word',  w:"IS", d:250},
    {type:'word',  w:"MURDERED", d:380},
    {type:'word',  w:"AT", d:250},
    {type:'word',  w:"A", d:250},
    {type:'word',  w:"WILSON", d:380},
    {type:'word',  w:"PICKETT", d:380},
    {type:'word',  w:"CONCERT", d:380},
    {type:'image', img:"20-sunset-vine-murder.jpg", d:1000},
    {type:'image', img:"21-hollywood-palladium.jpg", d:640},
    {type:'word',  w:"SCOTT", d:380},
    {type:'word',  w:"AND", d:250},
    {type:'word',  w:"OWENS", d:380},
    {type:'word',  w:"FORM", d:380},
    {type:'word',  w:"THE", d:250},
    {type:'word',  w:"BLOODS", d:380},
    {type:'image', img:"11-bloodz-crips-graphic.jpg", d:720},
    {type:'word',  w:"THEY", d:250},
    {type:'word',  w:"KILL", d:380},
    {type:'word',  w:"BUDDHA", d:380},
    {type:'word',  w:"MORROW", d:380},
    {type:'image', img:"05-street-party.jpg", d:720},
    {type:'image', img:"15-national-guard.jpg", d:720},
    {type:'word',  w:"1974", d:600},
    {type:'word',  w:"WASHINGTON", d:380},
    {type:'word',  w:"IS", d:250},
    {type:'word',  w:"ARRESTED", d:380},
    {type:'image', img:"14-aerial-freeway.jpg", d:640},
    {type:'word',  w:"AND", d:250},
    {type:'word',  w:"SENT", d:380},
    {type:'word',  w:"TO", d:250},
    {type:'word',  w:"PRISON", d:380},
    {type:'image', img:"23-freeway-traffic.jpg", d:640},
    {type:'word',  w:"TOOKIE", d:380},
    {type:'word',  w:"LEADS", d:380},
    {type:'word',  w:"THE", d:250},
    {type:'word',  w:"GANG", d:380},
    {type:'word',  w:"INTO", d:380},
    {type:'word',  w:"CHAOS", d:380},
    {type:'image', img:"19-red-suit-jump.jpg", d:640},
    {type:'word',  w:"1976", d:600},
    {type:'word',  w:"WASHINGTON", d:380},
    {type:'word',  w:"IS", d:250},
    {type:'word',  w:"SHOT", d:380},
    {type:'word',  w:"AND", d:250},
    {type:'word',  w:"BECOMES", d:380},
    {type:'word',  w:"ADDICTED", d:380},
    {type:'image', img:"18-kday-float.jpg", d:640},
    {type:'word',  w:"1977", d:600},
    {type:'word',  w:"HE", d:250},
    {type:'word',  w:"TRIES", d:380},
    {type:'word',  w:"TO", d:250},
    {type:'word',  w:"NEGOTIATE", d:380},
    {type:'word',  w:"A", d:250},
    {type:'word',  w:"TRUCE", d:380},
    {type:'image', img:"22-marching-band.jpg", d:640},
    {type:'image', img:"13-red-convertible.jpg", d:640},
    {type:'word',  w:"1979", d:600},
    {type:'word',  w:"TOOKIE", d:380},
    {type:'word',  w:"ROBS", d:380},
    {type:'word',  w:"A", d:250},
    {type:'word',  w:"STORE", d:380},
    {type:'word',  w:"AND", d:250},
    {type:'word',  w:"A", d:250},
    {type:'word',  w:"MOTEL", d:380},
    {type:'image', img:"28-protest-march.jpg", d:640},
    {type:'word',  w:"HE", d:250},
    {type:'word',  w:"KILLS", d:380},
    {type:'word',  w:"THE", d:250},
    {type:'word',  w:"CLERK", d:380},
    {type:'word',  w:"AND", d:250},
    {type:'word',  w:"THE", d:250},
    {type:'word',  w:"FAMILY", d:380},
    {type:'image', img:"27-marcha-flyer.jpg", d:640},
    {type:'word',  w:"RAYMOND", d:380},
    {type:'word',  w:"WARNS", d:380},
    {type:'word',  w:"HIM", d:250},
    {type:'word',  w:"NOT", d:250},
    {type:'word',  w:"TO", d:250},
    {type:'image', img:"16-palm-street.jpg", d:640},
    {type:'word',  w:"RAYMOND", d:380},
    {type:'word',  w:"INFORMS", d:380},
    {type:'word',  w:"THE", d:250},
    {type:'word',  w:"POLICE", d:380},
    {type:'word',  w:"ANYWAY", d:380},
    {type:'image', img:"29-washington-portrait.jpg", d:1000},
    {type:'word',  w:"TOOKIE", d:380},
    {type:'word',  w:"IS", d:250},
    {type:'word',  w:"ARRESTED", d:380},
    {type:'word',  w:"FROM", d:250},
    {type:'word',  w:"PRISON", d:380},
    {type:'image', img:"11-bloodz-crips-graphic.jpg", d:720},
    {type:'word',  w:"HE", d:250},
    {type:'word',  w:"ORDERS", d:380},
    {type:'word',  w:"RAYMOND'S", d:380},
    {type:'word',  w:"DEATH", d:380},
    {type:'image', img:"30-boulevard-billboard.jpg", d:680},
    {type:'word',  w:"RAYMOND", d:380},
    {type:'word',  w:"IS", d:250},
    {type:'word',  w:"KILLED", d:380},
    {type:'word',  w:"IN", d:250},
    {type:'word',  w:"A", d:250},
    {type:'word',  w:"DRIVE-BY", d:380},
    {type:'image', img:"24-mural-artists.jpg", d:640},
    {type:'image', img:"25-great-wall-mural.jpg", d:760},
    {type:'image', img:"26-la-fuente.jpg", d:640},
    {type:'word',  w:"THE WORLD IS A GHETTO", d:1350},
    {type:'credit', d:3800},
  ];

  const palette = ["#c8102e","#1c1c1c","#e8b923","#3d4a52","#0a0a0a","#8a1c1c","#22303a"];

  const stage = document.getElementById('stage');
  const flash = document.getElementById('flash');
  const fill = document.getElementById('fill');
  const counter = document.getElementById('counter');
  const clockEl = document.getElementById('clock');
  const intro = document.getElementById('intro');
  const outro = document.getElementById('outro');
  const controls = document.getElementById('controls');
  const startBtn = document.getElementById('startBtn');
  const replayBtn = document.getElementById('replayBtn');
  const pauseBtn = document.getElementById('pauseBtn');
  const restartBtn = document.getElementById('restartBtn');
  const scoreBtn = document.getElementById('scoreBtn');

  let colorTick = 0;

  beats.forEach((b, i) => {
    const el = document.createElement('div');
    el.id = 'cut-' + i;

    if(b.type === 'word'){
      el.className = 'cut word-cut';
      const color = palette[colorTick % palette.length]; colorTick++;
      el.innerHTML = `
        <div class="field" style="background:${color}"></div>
        <div class="word">${b.w}</div>
        <div class="tag">FRAME ${String(i+1).padStart(3,'0')}</div>
      `;
    } else if(b.type === 'image'){
      el.className = 'cut image-cut';
      const src = 'assets/images/' + b.img;
      el.innerHTML = `
        <div class="field" style="background-image:url('${src}')"></div>
        <div class="tag">FRAME ${String(i+1).padStart(3,'0')} · SOURCE STILL</div>
      `;
    } else if(b.type === 'closer'){
      el.className = 'cut closer-cut';
      el.innerHTML = `
        <div class="field"></div>
        <div class="closer-inner">
          <div class="closer-eyebrow">FRAME ${String(i+1).padStart(3,'0')} · THE LAST WORD</div>
          <div class="closer-text">${b.w}</div>
        </div>
        <div class="tag">FRAME ${String(i+1).padStart(3,'0')} · CLOSE</div>
      `;
    } else if(b.type === 'credit'){
      el.className = 'cut credit-cut';
      el.innerHTML = `
        <div class="field"></div>
        <div class="credit-inner">
          <div class="credit-eyebrow">The Song</div>
          <div class="credit-title">WAR &mdash; &ldquo;The World Is a Ghetto&rdquo;, 1972</div>
          <a class="credit-link" href="https://www.youtube.com/watch?v=0NSYqnJrGkE" target="_blank" rel="noopener">Hear it in full &rarr;</a>
          <button class="credit-continue" id="creditContinue">Continue &darr;</button>
        </div>
        <div class="tag">FRAME ${String(i+1).padStart(3,'0')} · CREDIT · HOLDING</div>
      `;
    }
    stage.appendChild(el);
  });

  let idx = -1;
  let timer = null;
  let paused = false;
  let startTime = 0;
  let clockTimer = null;

  function showCut(i){
    document.querySelectorAll('.cut').forEach(c => c.classList.remove('active'));
    const el = document.getElementById('cut-' + i);
    if(el) el.classList.add('active');
    flash.classList.remove('pop');
    void flash.offsetWidth;
    flash.classList.add('pop');
    counter.textContent = `CUT ${String(i+1).padStart(2,'0')} / ${String(beats.length).padStart(2,'0')}`;
    fill.style.width = ((i+1)/beats.length*100) + '%';
  }

  function step(){
    idx++;
    if(idx >= beats.length){ finish(); return; }
    showCut(idx);
    // The final frame (the song credit) holds on screen instead of auto-advancing —
    // it only moves on when the visitor clicks Continue.
    if(idx < beats.length - 1){
      timer = setTimeout(step, beats[idx].d);
    }
  }

  function finish(){
    controls.style.display = 'none';
    clearInterval(clockTimer);
    outro.style.display = 'flex';
    pauseScore();
  }

  function startClock(){
    startTime = Date.now();
    clockTimer = setInterval(()=>{
      const t = (Date.now()-startTime)/1000;
      const m = String(Math.floor(t/60)).padStart(2,'0');
      const s = (t%60).toFixed(1).padStart(4,'0');
      clockEl.textContent = `${m}:${s}`;
    }, 100);
  }

  function begin(){
    intro.style.display = 'none';
    outro.style.display = 'none';
    controls.style.display = 'flex';
    document.querySelectorAll('.cut').forEach(c => c.classList.remove('active'));
    idx = -1;
    paused = false;
    pauseBtn.textContent = 'Pause';
    startClock();
    step();
    playScore(true);
  }

  startBtn.addEventListener('click', begin);
  replayBtn.addEventListener('click', begin);
  restartBtn.addEventListener('click', begin);

  const creditContinue = document.getElementById('creditContinue');
  if(creditContinue){
    creditContinue.addEventListener('click', () => {
      clearTimeout(timer);
      clearInterval(clockTimer);
      finish();
    });
  }

  pauseBtn.addEventListener('click', () => {
    paused = !paused;
    if(paused){
      clearTimeout(timer);
      clearInterval(clockTimer);
      pauseBtn.textContent = 'Resume';
      pauseScore();
    } else {
      pauseBtn.textContent = 'Pause';
      startClock();
      timer = setTimeout(step, 300);
      playScore(false);
    }
  });

  if(scoreBtn){
    scoreBtn.addEventListener('click', () => {
      toggleScore();
      scoreBtn.textContent = scoreIsPlaying ? '🔇 Mute Score' : '🔊 Score';
    });
  }
})();
