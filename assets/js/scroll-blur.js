(function(){
  // Scroll-velocity blur: images sharpen when scrolling is slow/stopped,
  // and blur proportional to how fast you're actually scrolling — not a
  // fixed timed animation, tied to real scroll speed.
  var targets = document.querySelectorAll(
    '.statement-field, .mood-break, .preview-card img'
  );
  if(!targets.length) return;

  targets.forEach(function(el){
    el.style.willChange = 'filter, transform';
  });

  var lastY = window.scrollY;
  var lastTime = Date.now();
  var settleTimer = null;
  var ticking = false;

  function applyBlur(px){
    var scale = 1 + Math.min(px, 10) * 0.003;
    targets.forEach(function(el){
      el.style.filter = 'blur(' + px + 'px)';
      el.style.transform = 'scale(' + scale + ')';
    });
  }

  function onScroll(){
    if(ticking) return;
    ticking = true;
    requestAnimationFrame(function(){
      var now = Date.now();
      var y = window.scrollY;
      var dt = Math.max(now - lastTime, 1);
      var dy = Math.abs(y - lastY);
      var velocity = dy / dt; // px per ms

      var blurAmount = Math.min(velocity * 9, 9);
      applyBlur(blurAmount);

      lastY = y;
      lastTime = now;
      ticking = false;

      clearTimeout(settleTimer);
      settleTimer = setTimeout(function(){ applyBlur(0); }, 140);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();
