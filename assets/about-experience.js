(function(){'use strict';
var veil=document.getElementById('veil');
if(veil){
  var pin=veil.querySelector('.veil-pin'),d=veil.querySelector('.veil-d'),
      reduced=matchMedia('(prefers-reduced-motion: reduce)').matches,raf=0;
  function frame(){
    raf=0;if(!document.body.classList.contains('about-page')||reduced)return;
    var r=veil.getBoundingClientRect(),span=r.height-innerHeight;if(span<=0)return;
    var t=Math.min(1,Math.max(0,-r.top/span)),e=t*t;
    d.style.setProperty('--m',(40+e*28)+'svh');
    pin.style.setProperty('--mo',Math.max(0,1-t*2.2));
  }
  function req(){if(!raf)raf=requestAnimationFrame(frame)}
  addEventListener('scroll',req,{passive:true});addEventListener('resize',req);
  new MutationObserver(req).observe(document.body,{attributes:true,attributeFilter:['class']});
  req();
}
var foot=document.getElementById('footer');
if(foot)new IntersectionObserver(function(es){document.body.classList.toggle('footer-in-view',es[0].isIntersecting)},{threshold:0}).observe(foot);
})();
