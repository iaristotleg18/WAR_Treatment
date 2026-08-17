(function(){
  // A faint, fixed grain texture across every page — the same visual
  // language as the montage's own .grain overlay, tying Reel 1 and Reel 2
  // together even on pages that never show a single image.
  var grain = document.createElement('div');
  grain.style.cssText = [
    'position:fixed', 'inset:0', 'z-index:1', 'pointer-events:none',
    'opacity:0.035',
    "background-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")"
  ].join(';');
  document.body.appendChild(grain);
})();

(function(){
  // Thin progress bar across the top of the page, filling as you scroll.
  var bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.appendChild(bar);

  function updateProgress(){
    var h = document.documentElement;
    var scrolled = h.scrollTop || document.body.scrollTop;
    var height = h.scrollHeight - h.clientHeight;
    var pct = height > 0 ? (scrolled / height) * 100 : 0;
    bar.style.width = pct + '%';
  }
  document.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();

  // Anything marked .reveal fades and rises into place as it scrolls into view.
  var targets = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var obs = new IntersectionObserver(function(items){
      items.forEach(function(item){
        if(item.isIntersecting){
          item.target.classList.add('in-view');
          obs.unobserve(item.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(function(el){ obs.observe(el); });
  } else {
    targets.forEach(function(el){ el.classList.add('in-view'); });
  }

  // Safety net: if anything marked .reveal is somehow still hidden a few
  // seconds after load (an observer that never fired, a layout edge case),
  // force it visible rather than leave text silently missing.
  setTimeout(function(){
    document.querySelectorAll('.reveal:not(.in-view)').forEach(function(el){
      el.classList.add('in-view');
    });
  }, 2500);
})();
