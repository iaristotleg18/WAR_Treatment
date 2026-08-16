(function(){
  // Auto-cycles the crisp foreground card through its pages via crossfade,
  // while the blurred background stays fixed underneath.
  var pages = document.querySelectorAll('.mh-page');
  if(!pages.length) return;

  var idx = 0;
  setInterval(function(){
    pages[idx].classList.remove('active');
    idx = (idx + 1) % pages.length;
    pages[idx].classList.add('active');
  }, 2600);
})();
