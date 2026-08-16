(function(){
  // Skip entirely on touch devices — a mouse-follow cursor has no place there.
  if(window.matchMedia && window.matchMedia('(pointer: coarse)').matches){ return; }

  var dot = document.createElement('div');
  dot.className = 'cursor-dot';
  document.body.appendChild(dot);

  document.addEventListener('mousemove', function(e){
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    dot.classList.add('active');
  });
  document.addEventListener('mouseleave', function(){
    dot.classList.remove('active');
  });

  // Any hoverable element gets: a) the cursor grows into a ring, b) a
  // js-hover class the CSS uses to drive the actual rollover (underline
  // draw-in on nav, highlight on cast rows, lift on buttons, etc.)
  var hoverTargets = document.querySelectorAll(
    'a, button, .cast-list li, .reel-entry'
  );
  hoverTargets.forEach(function(el){
    el.addEventListener('mouseenter', function(){
      dot.classList.add('hover');
      el.classList.add('js-hover');
    });
    el.addEventListener('mouseleave', function(){
      dot.classList.remove('hover');
      el.classList.remove('js-hover');
    });
  });
})();
