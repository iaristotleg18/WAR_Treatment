(function(){
  // Beats: word cuts use ONLY vocabulary drawn from the treatment's timeline.
  // Images are your uploaded stills, placed between the word beats.
  const beats = [
    {type:'word',  w:"THE WORLD IS A GHETTO", d:1400},
    {type:'word',  w:"A TRUE STORY",     d:900},
    {type:'word',  w:"ALBUM",            d:700},
    {type:'word',  w:"WAR",              d:750},
    {type:'word',  w:"1969",             d:700},
    {type:'word',  w:"SOUTH L.A.",       d:650},
    {type:'image', img:"08-street-scene.jpg", d:1000},
    {type:'word',  w:"RAYMOND WASHINGTON", d:600},
    {type:'word',  w:"GANG",             d:560},
    {type:'word',  w:"BABY AVENUES",     d:600},
    {type:'word',  w:"BLACK PANTHERS",   d:560},
    {type:'word',  w:"PROTECT",          d:500},
    {type:'word',  w:"1971",             d:480},
    {type:'image', img:"01-handshake.jpg", d:1100},
    {type:'word',  w:"TOOKIE WILLIAMS",  d:560},
    {type:'word',  w:"MAC THOMAS",       d:520},
    {type:'word',  w:"JOIN FORCES",      d:560},
    {type:'word',  w:"CRIPS",            d:600},
    {type:'word',  w:"ENTREPRENEURS",    d:520},
    {type:'word',  w:"WAR",              d:500},
    {type:'image', img:"05-war-band-promo.jpg", d:950},
    {type:'word',  w:"DOMINANT",         d:460},
    {type:'image', img:"03-war-roadcrew.jpg", d:900},
    {type:'image', img:"04-war-funkadelic-flyer.jpg", d:1000},
    {type:'word',  w:"1972",             d:460},
    {type:'word',  w:"WILSON PICKETT CONCERT", d:520},
    {type:'word',  w:"ROBERT BALLOU",    d:420},
    {type:'word',  w:"MURDERED",         d:420},
    {type:'image', img:"02-street-party.jpg", d:900},
    {type:'word',  w:"BLOODS",           d:480},
    {type:'image', img:"06-bloodz-crips.jpg", d:1000},
    {type:'word',  w:"WAR DECLARED",     d:460},
    {type:'word',  w:"1973",             d:420},
    {type:'word',  w:"BUDDHA MORROW",    d:400},
    {type:'word',  w:"KILLED",           d:360},
    {type:'word',  w:"ESCALATION",       d:440},
    {type:'image', img:"07-aerial-freeway.jpg", d:900},
    {type:'word',  w:"1974",             d:400},
    {type:'word',  w:"ROBBERY",          d:420},
    {type:'word',  w:"ARRESTED",         d:380},
    {type:'word',  w:"PRISON",           d:360},
    {type:'image', img:"13-freeway-traffic.jpg", d:750},
    {type:'word',  w:"1976",             d:380},
    {type:'word',  w:"INFIGHTING",       d:400},
    {type:'word',  w:"INJURED",          d:360},
    {type:'word',  w:"ADDICTED",         d:360},
    {type:'word',  w:"PCP",              d:340},
    {type:'image', img:"10-red-suit-jump.jpg", d:800},
    {type:'image', img:"09-kday-float.jpg", d:800},
    {type:'word',  w:"1977",             d:360},
    {type:'word',  w:"TRUCE",            d:380},
    {type:'word',  w:"UNSUCCESSFUL",     d:420},
    {type:'image', img:"11-hollywood-bowl.jpg", d:900},
    {type:'image', img:"12-marching-band.jpg", d:850},
    {type:'word',  w:"SPIRALED",         d:380},
    {type:'word',  w:"1979",             d:340},
    {type:'word',  w:"HOMICIDE",         d:320},
    {type:'word',  w:"CHARGES",          d:320},
    {type:'word',  w:"ARRESTED",         d:300},
    {type:'word',  w:"DRIVE-BY",         d:300},
    {type:'image', img:"14-boulevard-billboard.jpg", d:800},
    {type:'word',  w:"KILLED",           d:280},
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
