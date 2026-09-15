(()=>{
  const root=document.querySelector('#dathium-web-showcase');
  if(!root)return;

  const $=(s,c=root)=>c.querySelector(s);
  const $$=(s,c=root)=>[...c.querySelectorAll(s)];
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;

  const industries={
    corporate:{kicker:'PRESENCIA EMPRESARIAL',label:'EMPRESAS',domain:'tuempresa.pe',title:'Una web que representa el verdadero nivel de tu empresa.',text:'Diseñamos sitios corporativos que generan confianza, comunican valor y convierten visitas en oportunidades.',tags:['Web corporativa','Landing pages','Portafolio','SEO','Formularios'],html:`<div class="dws-corporate"><div class="dws-preview-nav"><strong>ESTUDIO.</strong><span>Servicios · Proyectos · Nosotros · Contacto</span></div><div class="dws-corporate-main"><div><small>IDEAS QUE CRECEN</small><h3>Experiencias digitales con propósito.</h3><button class="dws-preview-btn">Conócenos →</button></div><div class="dws-corporate-art"></div></div></div>`},
    commerce:{kicker:'COMERCIO DIGITAL',label:'E-COMMERCE',domain:'tutienda.pe',title:'Una tienda diseñada para transformar visitas en ventas.',text:'Creamos experiencias de compra claras y rápidas, pensadas para producto, navegación, carrito y conversión.',tags:['Catálogo','Productos','Carrito','Pagos','Promociones','Inventario'],html:`<div class="dws-commerce"><div class="dws-preview-nav"><strong>FORMA.</strong><span>Tienda · Buscar · Mi cuenta · Carrito 02</span></div><div class="dws-commerce-grid">${[189,219,159].map((p,i)=>`<article class="dws-product-card"><div class="dws-product-media"><i></i></div><span>Forma / 0${i+1}</span><b>S/ ${p}</b></article>`).join('')}</div></div>`},
    tourism:{kicker:'TURISMO & EXPERIENCIAS',label:'TURISMO',domain:'explora.pe',title:'Convierte destinos y experiencias en consultas y reservas.',text:'Diseñamos sitios para agencias y operadores turísticos que facilitan descubrir, consultar y reservar.',tags:['Destinos','Tours','Paquetes','Reservas','WhatsApp','Pagos'],html:`<div class="dws-tourism"><div class="dws-tourism-hero"><div class="dws-preview-nav"><strong>ANDES.</strong><span>Destinos · Experiencias · Nosotros</span></div><div class="dws-tourism-copy"><small>DESCUBRE AREQUIPA</small><h3>Experiencias que empiezan antes del viaje.</h3><button class="dws-preview-btn">Explorar destinos →</button></div></div><div class="dws-booking"><div><small>DESTINO</small><strong>Valle del Colca</strong></div><div><small>FECHA</small><strong>24 Sep.</strong></div><div><small>VIAJEROS</small><strong>2 personas</strong></div><button>Ver disponibilidad</button></div></div>`},
    services:{kicker:'EMPRESAS DE SERVICIOS',label:'SERVICIOS',domain:'tuservicio.pe',title:'Una web que convierte consultas en oportunidades.',text:'Diseñamos sitios para empresas y profesionales que venden conocimiento, atención o servicios especializados.',tags:['Servicios','Cotizaciones','Agenda','Formularios','CRM','WhatsApp'],html:`<div class="dws-services"><div class="dws-preview-nav"><strong>ATLAS.</strong><span>Servicios · Proyectos · Nosotros · Contacto</span></div><div class="dws-services-main"><div><small>SOLUCIONES PROFESIONALES</small><h3>Convierte una consulta en una oportunidad.</h3><button class="dws-preview-btn">Solicitar cotización →</button></div><div class="dws-service-list"><article><span>01</span><strong>Consultoría</strong><b>→</b></article><article><span>02</span><strong>Implementación</strong><b>→</b></article><article><span>03</span><strong>Soporte especializado</strong><b>→</b></article></div></div></div>`},
    hotel:{kicker:'HOSPITALIDAD',label:'HOTELES',domain:'tuhotel.pe',title:'Haz más simple descubrir, consultar y reservar.',text:'Desarrollamos experiencias para hoteles y hospedajes donde disponibilidad, habitaciones y contacto sean fáciles de encontrar.',tags:['Habitaciones','Reservas','Galería','Ubicación','WhatsApp','Pagos'],html:`<div class="dws-hotel"><div class="dws-preview-nav"><strong>NIDO.</strong><span>Habitaciones · Experiencias · Restaurante</span></div><div class="dws-hotel-grid"><div class="dws-hotel-photo"><span>Ver habitaciones →</span></div><div class="dws-reservation"><small>RESERVA TU ESTADÍA</small><h3>Encuentra tu espacio.</h3><label>Llegada &nbsp; 24 Sep.</label><label>Salida &nbsp; 26 Sep.</label><label>Huéspedes &nbsp; 2 adultos</label><button>Ver disponibilidad</button></div></div></div>`},
    restaurant:{kicker:'GASTRONOMÍA',label:'RESTAURANTES',domain:'turestaurante.pe',title:'La experiencia puede empezar antes del primer plato.',text:'Creamos sitios para restaurantes donde menú, reservas, ubicación y contacto estén a un paso.',tags:['Menú digital','Reservas','Galería','Ubicación','WhatsApp','Eventos'],html:`<div class="dws-restaurant"><div class="dws-preview-nav"><strong>MESA.</strong><span>Menú · Reservas · Nosotros · Ubicación</span></div><div class="dws-restaurant-grid"><div class="dws-restaurant-copy"><small>COCINA CONTEMPORÁNEA</small><h3>Una experiencia antes del primer plato.</h3><button class="dws-preview-btn">Ver menú →</button></div><div><div class="dws-menu"><article><div class="dws-dish"></div><div><small>ENTRADA</small><strong>Sabores de temporada</strong></div><b>S/ 38</b></article><article><div class="dws-dish"></div><div><small>PRINCIPAL</small><strong>Selección de la casa</strong></div><b>S/ 62</b></article><article><div class="dws-dish"></div><div><small>POSTRE</small><strong>Final de autor</strong></div><b>S/ 26</b></article></div><div class="dws-table-reservation"><span>Viernes · 8:00 PM · 4 personas</span><button>Reservar mesa</button></div></div></div></div>`}
  };
  const keys=Object.keys(industries);
  let activeKey='corporate';

  function renderIndustry(key,animate=true){
    const d=industries[key],index=keys.indexOf(key),stage=$('.dws-browser-stage');
    activeKey=key;
    $$('.dws-showcase-steps button').forEach(b=>b.classList.toggle('is-active',b.dataset.industry===key));
    const update=()=>{
      $('#dws-stage-kicker').textContent=d.kicker;
      $('#dws-stage-counter').textContent=`${String(index+1).padStart(2,'0')} / ${String(keys.length).padStart(2,'0')}`;
      $('#dws-stage-domain').textContent=d.domain;
      $('#dws-stage-label').textContent=d.label;
      $('#dws-stage-title').textContent=d.title;
      $('#dws-stage-text').textContent=d.text;
      $('#dws-stage-tags').innerHTML=d.tags.map(t=>`<span>${t}</span>`).join('');
      $('#dws-stage-content').innerHTML=d.html;
    };
    if(animate&&!reduced&&window.gsap){
      gsap.to(stage,{opacity:.35,y:8,duration:.16,ease:'power1.out',onComplete:()=>{update();gsap.fromTo(stage,{opacity:.35,y:8},{opacity:1,y:0,duration:.28,ease:'power2.out'});}});
    }else update();
  }

  $('.dws-showcase-steps').addEventListener('click',e=>{
    const b=e.target.closest('button[data-industry]');
    if(b)renderIndustry(b.dataset.industry);
  });
  renderIndustry('corporate',false);

  if(window.gsap&&window.ScrollTrigger&&!reduced){
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.dws-reveal').forEach(el=>gsap.to(el,{opacity:1,y:0,duration:.75,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}}));
    gsap.to('.dws-ring-one',{y:-18,x:-10,duration:4.5,yoyo:true,repeat:-1,ease:'sine.inOut'});
    gsap.to('.dws-ring-two',{y:14,x:8,duration:3.8,yoyo:true,repeat:-1,ease:'sine.inOut'});
    gsap.to('.dws-live-card',{y:-7,duration:2.4,yoyo:true,repeat:-1,ease:'sine.inOut'});
    const mq=matchMedia('(min-width: 1051px)');
    if(mq.matches){
      ScrollTrigger.create({
        trigger:'.dws-showcase',start:'top top',end:()=>`+=${keys.length*460}`,pin:'.dws-showcase-shell',pinSpacing:true,
        onUpdate:self=>{const idx=Math.min(keys.length-1,Math.floor(self.progress*keys.length));const next=keys[idx];if(next!==activeKey)renderIndustry(next);}
      });
    }
    gsap.utils.toArray('.dws-process article').forEach((el,i)=>ScrollTrigger.create({trigger:'.dws-process',start:`top+=${i*35} 78%`,onEnter:()=>activateProcess(i),onEnterBack:()=>activateProcess(i)}));
  }else{
    $$('.dws-reveal').forEach(el=>{el.style.opacity=1;el.style.transform='none'});
  }

  const processItems=$$('.dws-process article'),processBar=$('.dws-process-progress i');
  function activateProcess(i){
    processItems.forEach((el,n)=>el.classList.toggle('is-active',n===i));
    if(processBar)processBar.style.transform=`translateX(${i*100}%)`;
  }
  activateProcess(0);
})();
