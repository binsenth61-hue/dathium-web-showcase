(()=>{
  const root=document.querySelector('#dathium-web-showcase');
  if(!root)return;

  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals=[...root.querySelectorAll('.dws-reveal')];

  if(reduced){
    reveals.forEach(el=>{el.style.opacity='1';el.style.transform='none';});
    return;
  }

  const observer=new IntersectionObserver((entries,obs)=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      entry.target.animate([
        {opacity:0,transform:'translateY(24px)'},
        {opacity:1,transform:'translateY(0)'}
      ],{
        duration:700,
        easing:'cubic-bezier(.2,.75,.25,1)',
        fill:'forwards'
      });
      obs.unobserve(entry.target);
    });
  },{threshold:.12,rootMargin:'0px 0px -4% 0px'});

  reveals.forEach(el=>observer.observe(el));

  const floatOne=root.querySelector('.dws-float-one');
  const floatTwo=root.querySelector('.dws-float-two');
  const browser=root.querySelector('.dws-browser-main');
  let raf=0;

  window.addEventListener('pointermove',e=>{
    if(window.innerWidth<900)return;
    cancelAnimationFrame(raf);
    raf=requestAnimationFrame(()=>{
      const x=e.clientX/window.innerWidth-.5;
      const y=e.clientY/window.innerHeight-.5;
      if(browser) browser.style.transform=`rotate(.25deg) translate3d(${x*5}px,${y*4}px,0)`;
      if(floatOne) floatOne.style.transform=`translate3d(${x*-10}px,${y*-8}px,0)`;
      if(floatTwo) floatTwo.style.transform=`translate3d(${x*11}px,${y*8}px,0)`;
    });
  },{passive:true});

  root.querySelectorAll('.dws-sector').forEach(card=>{
    card.addEventListener('pointermove',e=>{
      if(window.innerWidth<900 || card.classList.contains('dws-sector-photo') || card.classList.contains('dws-sector-commerce'))return;
      const r=card.getBoundingClientRect();
      const x=((e.clientX-r.left)/r.width)*100;
      const y=((e.clientY-r.top)/r.height)*100;
      card.style.backgroundImage=`radial-gradient(circle at ${x}% ${y}%, rgba(149,167,255,.09), transparent 34%), linear-gradient(145deg,#101b2f,#0d1728)`;
    });
    card.addEventListener('pointerleave',()=>{card.style.backgroundImage='';});
  });
})();
