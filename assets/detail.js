(function(){'use strict';
var det=document.getElementById('det');if(!det)return;
var info=det.querySelector('.dinfo'),meta=det.querySelector('.dmeta'),inq=document.getElementById('dinq'),
    desc=document.getElementById('ddesc'),btns=det.querySelector('.dbtns');
// Primary action sits right under the details, like a product page.
var cta=document.createElement('div');cta.className='dcta';meta.insertAdjacentElement('afterend',cta);cta.appendChild(inq);
inq.querySelector('span').textContent='Inquire about this work';
var sub=document.createElement('p');sub.className='dsub';sub.innerHTML='<a href="#works" data-cur="link">View all works</a>';
cta.insertAdjacentElement('afterend',sub);
sub.querySelector('a').addEventListener('click',function(e){e.preventDefault();var c=document.getElementById('dclose');if(c)c.click();setTimeout(function(){location.hash='works'},50)});
// Description shortened with a Read more link.
var more=document.createElement('button');more.className='dmore';more.type='button';more.innerHTML='<span>Read more</span>';
desc.insertAdjacentElement('afterend',more);
more.addEventListener('click',function(){det.classList.add('more')});
function check(){det.classList.remove('more');requestAnimationFrame(function(){more.style.display=desc.scrollHeight>desc.clientHeight+2?'':'none'})}
new MutationObserver(check).observe(desc,{childList:true,characterData:true,subtree:true});
document.getElementById('dprev').querySelector('span:not(.ar)').textContent='Previous';
document.getElementById('dnext').querySelector('span:not(.ar)').textContent='Next';
info.appendChild(btns);
})();
