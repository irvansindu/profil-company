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

  // I18N: EN default, ID optional
  const I18N = {
    en: {
      'hero.title': 'Your B2B Digital Marketplace Partner',
      'hero.lead': 'Irvantra Technologies Inc helps resellers, communities, and companies distribute game top-ups, vouchers, and other digital services—reliably and competitively.',
      'hero.ctaBrowse': 'Browse Marketplace',
      'hero.ctaPartner': 'Partner With Us',
      'hero.h1': 'Trusted by B2B Partners',
      'hero.h2': 'Fast & Organized Processes',
      'hero.h3': 'Responsive Support',
      'about.title': 'About Irvantra Technologies Inc',
      'about.body': 'Irvantra Technologies Inc is a B2B digital marketplace that helps business partners distribute digital products—ranging from game top-ups to vouchers—with a simple process and professional support.',
      'services.title': 'Our Services',
      'services.s1.title': 'Digital Game & Voucher Marketplace',
      'services.s1.desc': 'Access a broad catalog of games and popular vouchers at competitive prices to support your sales.',
      'services.s2.title': 'B2B Distribution',
      'services.s2.desc': 'Digital product distribution for resellers, communities, and companies with an organized process.',
      'services.s3.title': 'White-label & Branding Partner',
      'services.s3.desc': 'Your own label with brand assets and campaign support—ready to launch.',
      'services.s4.title': 'Custom Collaboration',
      'services.s4.desc': 'Tailored collaboration—from product curation to the agreed operational flow.',
      'services.s5.title': 'Local Reseller Support',
      'services.s5.desc': 'Tailored program for local resellers: competitive pricing, steady stock, promo materials, and sales enablement.',
      'services.s5.cta': 'Join as Reseller',
      'services.s6.title': 'Partner Onboarding & Support',
      'services.s6.desc': 'Dedicated onboarding, playbooks, and SLA-backed support to help you scale.',
      'services.s6.cta': 'Contact Us',
      'why.title': 'Why Choose Irvantra',
      'why.i1': 'Fast & secure transactions',
      'why.i2': 'Protected transactions',
      'why.i3': 'Multi-game & platform support',
      'why.i4': 'Trusted by thousands',
      'why.i5': 'Consistent processes',
      'why.i6': 'Partner enablement',
      'featured.title': 'Featured Marketplace',
      'featured.all': 'All',
      'featured.mobile': 'Mobile',
      'featured.pc': 'PC',
      'featured.console': 'Console',
      'testimonials.title': 'What Our Partners Say',
      'contact.title': 'Contact & Partnership',
      'contact.name': 'Name',
      'contact.namePh': 'Your name',
      'contact.email': 'Email',
      'contact.emailPh': 'name@company.com',
      'contact.company': 'Company',
      'contact.companyPh': 'Company name',
      'contact.interest': "I'm interested in",
      'contact.opt1': 'Reseller Program',
      'contact.opt2': 'B2B Distribution',
      'contact.opt3': 'White-label & Branding',
      'contact.opt4': 'Custom Collaboration',
      'contact.message': 'Message',
      'contact.messagePh': 'Tell us about your goals...',
      'contact.submit': 'Request Partnership',
      'contact.note': 'By submitting this form you agree to our privacy policy.'
    },
    id: {
      'hero.title': 'Partner Marketplace Digital B2B Anda',
      'hero.lead': 'Irvantra Technologies Inc membantu reseller, komunitas, dan perusahaan mendistribusikan top-up game, voucher, dan layanan digital—secara andal dan kompetitif.',
      'hero.ctaBrowse': 'Lihat Marketplace',
      'hero.ctaPartner': 'Jadi Mitra',
      'hero.h1': 'Dipercaya Mitra B2B',
      'hero.h2': 'Proses Cepat & Teratur',
      'hero.h3': 'Dukungan Responsif',
      'about.title': 'Tentang Irvantra Technologies Inc',
      'about.body': 'Irvantra Technologies Inc adalah marketplace digital B2B yang membantu mitra bisnis mendistribusikan produk digital—dari top-up game hingga voucher—dengan proses sederhana dan dukungan profesional.',
      'services.title': 'Layanan Kami',
      'services.s1.title': 'Marketplace Game & Voucher Digital',
      'services.s1.desc': 'Akses katalog game dan voucher populer dengan harga kompetitif untuk mendukung penjualan Anda.',
      'services.s2.title': 'Distribusi B2B',
      'services.s2.desc': 'Distribusi produk digital untuk reseller, komunitas, dan perusahaan dengan proses yang teratur.',
      'services.s3.title': 'White-label & Branding Partner',
      'services.s3.desc': 'Label Anda sendiri dengan aset brand dan dukungan kampanye—siap diluncurkan.',
      'services.s4.title': 'Kolaborasi Khusus',
      'services.s4.desc': 'Kolaborasi yang disesuaikan—dari kurasi produk hingga alur operasional yang disepakati.',
      'services.s5.title': 'Dukungan Reseller Lokal',
      'services.s5.desc': 'Program untuk reseller lokal: harga kompetitif, stok stabil, materi promosi, dan pendampingan penjualan.',
      'services.s5.cta': 'Gabung sebagai Reseller',
      'services.s6.title': 'Onboarding & Dukungan Mitra',
      'services.s6.desc': 'Onboarding terdedikasi, playbook, dan dukungan SLA untuk membantu Anda bertumbuh.',
      'services.s6.cta': 'Hubungi Kami',
      'why.title': 'Mengapa Memilih Irvantra',
      'why.i1': 'Transaksi cepat & aman',
      'why.i2': 'Transaksi terlindungi',
      'why.i3': 'Dukungan multi-gim & platform',
      'why.i4': 'Dipercaya ribuan pengguna',
      'why.i5': 'Proses konsisten',
      'why.i6': 'Pemberdayaan mitra',
      'featured.title': 'Marketplace Unggulan',
      'featured.all': 'Semua',
      'featured.mobile': 'Mobile',
      'featured.pc': 'PC',
      'featured.console': 'Konsol',
      'testimonials.title': 'Kata Mitra Kami',
      'contact.title': 'Kontak & Kemitraan',
      'contact.name': 'Nama',
      'contact.namePh': 'Nama Anda',
      'contact.email': 'Email',
      'contact.emailPh': 'nama@perusahaan.com',
      'contact.company': 'Perusahaan',
      'contact.companyPh': 'Nama perusahaan',
      'contact.interest': 'Saya tertarik pada',
      'contact.opt1': 'Program Reseller',
      'contact.opt2': 'Distribusi B2B',
      'contact.opt3': 'White-label & Branding',
      'contact.opt4': 'Kolaborasi Khusus',
      'contact.message': 'Pesan',
      'contact.messagePh': 'Ceritakan tujuan Anda...',
      'contact.submit': 'Ajukan Kemitraan',
      'contact.note': 'Dengan mengirim formulir ini Anda menyetujui kebijakan privasi kami.'
    }
  };

  const langToggle = byId('langToggle');
  const applyI18n = (lang)=>{
    const dict = I18N[lang] || I18N.en;
    qsa('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(dict[key] !== undefined){ el.textContent = dict[key]; }
    });
    qsa('[data-i18n-placeholder]').forEach(el=>{
      const key = el.getAttribute('data-i18n-placeholder');
      if(dict[key] !== undefined){ el.setAttribute('placeholder', dict[key]); }
    });
    if(langToggle){ langToggle.textContent = lang.toUpperCase(); }
  };

  const savedLang = localStorage.getItem('lang') || 'en';
  applyI18n(savedLang);
  if(langToggle){
    langToggle.addEventListener('click', ()=>{
      const next = (localStorage.getItem('lang') || 'en') === 'en' ? 'id' : 'en';
      localStorage.setItem('lang', next);
      applyI18n(next);
    });
  }

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

  // Contact form submit (Formspree or custom endpoint)
  const form = byId('contactForm');
  const status = byId('formStatus');
  if(form){
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const endpoint = form.dataset.endpoint;
      if(!endpoint){ return; }
      status && (status.textContent = 'Sending...');
      const data = new FormData(form);
      try{
        const res = await fetch(endpoint, { method:'POST', body:data, headers:{ 'Accept':'application/json' } });
        if(res.ok){
          status && (status.textContent = 'Thanks! We will get back to you shortly.');
          form.reset();
        } else {
          const err = await res.json().catch(()=>({}));
          status && (status.textContent = err.message || 'Submission failed. Please try again.');
        }
      }catch(err){
        status && (status.textContent = 'Network error. Please try again.');
      }
    });
  }
})();
