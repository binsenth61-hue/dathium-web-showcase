(()=>{
  const root=document.querySelector('#dathium-web-showcase');
  if(!root)return;

  root.classList.add('dws-js');
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals=[...root.querySelectorAll('.dws-reveal')];

  const showAll=()=>{
    reveals.forEach(el=>{
      el.style.opacity='1';
      el.style.transform='none';
    });
  };

  if(reduced || !('IntersectionObserver' in window)){
    showAll();
  }else{
    const observer=new IntersectionObserver((entries,obs)=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting)return;
        entry.target.animate([
          {opacity:0,transform:'translateY(18px)'},
          {opacity:1,transform:'translateY(0)'}
        ],{
          duration:560,
          easing:'cubic-bezier(.2,.72,.24,1)',
          fill:'forwards'
        });
        obs.unobserve(entry.target);
      });
    },{threshold:.1,rootMargin:'0px 0px -3% 0px'});

    reveals.forEach(el=>observer.observe(el));
  }

  root.querySelectorAll('img').forEach(img=>{
    img.addEventListener('error',()=>{
      const holder=img.parentElement;
      img.style.display='none';
      if(holder)holder.classList.add('dws-image-fallback');
    },{once:true});
  });

  root.querySelectorAll('a[href*="wa.me"]').forEach(link=>{
    link.setAttribute('target','_blank');
    link.setAttribute('rel','noopener noreferrer');
  });
})();