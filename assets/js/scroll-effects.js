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
})();
