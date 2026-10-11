
(function(){
  function ready(fn){ if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fn);else fn(); }
  ready(function(){
    // Home page greeting/date (replaces ASP.NET dynamic labels)
    var g=document.getElementById('lblGreeting'), d=document.getElementById('lblDate');
    if(g){var h=new Date().getHours(); g.textContent=h<12?'Good Morning':h<17?'Good Afternoon':'Good Evening';}
    if(d){d.textContent=new Date().toLocaleDateString(undefined,{weekday:'long',year:'numeric',month:'long',day:'numeric'});}

    // Static form behavior. Data stays in the browser unless a real backend is connected.
    document.querySelectorAll('form[data-static-form="true"]').forEach(function(f){
      f.addEventListener('submit',function(e){e.preventDefault(); if(!f.checkValidity()){f.reportValidity();return;}
        var old=f.querySelector('.form-status'); if(old)old.remove();
        var p=document.createElement('div');p.className='form-status';p.textContent='Form is ready in HTML. Connect this form to your email/API endpoint to receive submissions.';f.appendChild(p);
      });
      f.addEventListener('reset',function(){var old=f.querySelector('.form-status');if(old)old.remove();});
    });

    // Gallery lightbox/slideshow
    var box=document.getElementById('galleryLightbox');
    if(box){var cards=[].slice.call(document.querySelectorAll('.gallery-card')), img=box.querySelector('img'), idx=0, timer=null;
      function show(i){if(!cards.length)return;idx=(i+cards.length)%cards.length;img.src=cards[idx].getAttribute('data-gallery-src');box.classList.add('open');box.setAttribute('aria-hidden','false');}
      function close(){box.classList.remove('open');box.setAttribute('aria-hidden','true');if(timer){clearInterval(timer);timer=null;}}
      cards.forEach(function(c,i){c.addEventListener('click',function(){show(i);});});
      box.querySelector('.gallery-close').addEventListener('click',close);box.querySelector('.gallery-prev').addEventListener('click',function(){show(idx-1)});box.querySelector('.gallery-next').addEventListener('click',function(){show(idx+1)});
      box.addEventListener('click',function(e){if(e.target===box)close();});
      document.addEventListener('keydown',function(e){if(!box.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(idx-1);if(e.key==='ArrowRight')show(idx+1);});
      var start=document.getElementById('startSlideshow');if(start)start.addEventListener('click',function(){show(0);if(timer)clearInterval(timer);timer=setInterval(function(){show(idx+1)},3000);});
    }

    // Keep original snow effect when available, but never fail the page if legacy plugin errors.
    try{if(window.jQuery && jQuery.fn && typeof jQuery(document).snow==='function'){jQuery(document).snow({SnowImage:'Images/snow.gif'});}}catch(e){}
  });
})();
