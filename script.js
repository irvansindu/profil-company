// Irvantra site interactions (concise)
(function(){
  const byId = (id)=>document.getElementById(id);
  const qs = (s,el=document)=>el.querySelector(s);
  const qsa=(s,el=document)=>Array.from(el.querySelectorAll(s));

  // Year
  const y=qs('#year'); if(y) y.textContent = new Date().getFullYear();

  // Mobile nav
  const navToggle = byId('navToggle');
  const menu = byId('primary-menu');
  if(navToggle && menu){
    navToggle.addEventListener('click',()=>{
      const open = menu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    qsa('a',menu).forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
  }

  // Theme toggle (dark default)
  const themeToggle = byId('themeToggle');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('theme');
  if(saved){ document.documentElement.dataset.theme = saved; }
  else { document.documentElement.dataset.theme = prefersDark? 'dark':'dark'; }
  themeToggle && themeToggle.addEventListener('click',()=>{
    const cur = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = cur; localStorage.setItem('theme', cur);
  });

  // Reveal on view
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target);} });
  },{threshold:.15});
  qsa('.reveal').forEach(el=>io.observe(el));

  // Featured tabs filter
  const tabs = qsa('.tab');
  const tiles = qsa('.tile');
  tabs.forEach(t=>t.addEventListener('click',()=>{
    tabs.forEach(x=>x.classList.remove('active')); t.classList.add('active');
    const f = t.dataset.filter;
    tiles.forEach(tile=>{
      const show = f==='all' || tile.dataset.cat===f;
      tile.style.display = show ? '' : 'none';
    });
  }));

  // Testimonials carousel (simple)
  const track = qs('.carousel-track');
  const prev = qs('.carousel .prev');
  const next = qs('.carousel .next');
  if(track && prev && next){
    const step = ()=> track.clientWidth * 0.9;
    prev.addEventListener('click',()=> track.scrollBy({left:-step(),behavior:'smooth'}));
    next.addEventListener('click',()=> track.scrollBy({left: step(),behavior:'smooth'}));
  }
})();
