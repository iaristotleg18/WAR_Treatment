(function(){
  // Reel rail: shows which year is in view while scrolling the treatment section.
  var rail = document.getElementById('reelRail');
  var railTag = document.getElementById('railTag');
  var railYear = document.getElementById('railYear');
  var treatment = document.getElementById('treatment');
  var entries = Array.prototype.slice.call(document.querySelectorAll('.reel-entry'));

  if('IntersectionObserver' in window && treatment){
    var sectionObserver = new IntersectionObserver(function(items){
      items.forEach(function(item){
        rail.classList.toggle('visible', item.isIntersecting);
      });
    }, { threshold: 0.02 });
    sectionObserver.observe(treatment);

    var entryObserver = new IntersectionObserver(function(items){
      items.forEach(function(item){
        if(item.isIntersecting){
          var idx = item.target.getAttribute('data-index');
          var year = item.target.getAttribute('data-year');
          railTag.textContent = 'REEL 02 · ' + idx.padStart(2,'0') + '/08';
          railYear.textContent = year;
        }
      });
    }, { threshold: 0.5 });
    entries.forEach(function(el){ entryObserver.observe(el); });

    // Scroll-reveal: each entry fades/rises into place as it enters the viewport.
    var revealObserver = new IntersectionObserver(function(items){
      items.forEach(function(item){
        if(item.isIntersecting){
          item.target.classList.add('in-view');
          revealObserver.unobserve(item.target);
        }
      });
    }, { threshold: 0.18 });
    entries.forEach(function(el){ revealObserver.observe(el); });
  }
})();
