/* =========================================================================
   =====  PUSAT EDIT KONTEN — CUKUP UBAH DATA DI BAWAH INI  =================
   Semua teks, angka, dan skill di halaman ini diambil dari objek berikut.
   Anda tidak perlu menyentuh HTML/CSS di atas untuk mengganti isi portofolio.
   ========================================================================= */
const PORTFOLIO_DATA = {

  // ---- Identitas & Hero ----
  profile: {
    initials: "ER",                 // inisial untuk logo & avatar
    firstName: "M",
    lastName: "Nur Erik Setiawan",
    role: "Portfolio",
    eyebrow: "Halo,rek kenalin aku M.Nur Erik Setiawan saat ini aku  sedang bersekolah di SMA NEGERI 1 KANDANGAN",
    tagline: "Setiap project kami kerjakan dengan sepenuh hati  walau kadang stress dikit.",
    cvUrl: "#",                     // ganti dengan link CV (PDF)
    email: "eryza@buisnes.com",
    availability: "Terbuka untuk proyek freelance",
    stats: [
      { value: "1+",  label: "Sedang Tahap Mencari Pengalaman" },
      { value: "3+", label: "Proyek selesai" },
      { value: "3",  label: "Klien puas" }
    ],
    // baris kode dekoratif di kartu sebelah hero — bisa diganti bebas
    codeLines: [
      "const developer = {",
      "  name: 'M.Nur Erik Setiawan',",
      "  role: 'Portfoilo',",
      "  stack: ['Animation', 'Editing', 'Coding'],",
      "  passion: 'Animation & Motion Graphic',",
      "};"
    ]
  },

  // ---- Tentang Saya ----
  about: {
    text: "Aku sendiri memiliki pegalaman dalam hal Editing,Animasi,Fotografi,Videografi,Dan banyal lagi macam macamnya.Aku juga sekarang dalam tahap ingin mecoba semua hal baru seperti coding ai dan Iot,untuk sekarang aku fokuskan di coding terlebih dahulu",
    facts: [
      { label: "Fokus saat ini",     value: "Mempelajari Coding & Animasi" },
      { label: "Cara kerja favorit", value: "Santai Tapi Selesai Tepat Waktu" },
      { label: "Sedang belajar",     value: "Dalam hal coding dan animasi" }
    ]
  },

  // ---- DASHBOARD SKILL ----
  // Tambah / hapus kategori atau skill dengan bebas, formatnya konsisten.
  // "level" adalah angka 0–100 (persen penguasaan).
  skillDashboard: {
    categories: [
      {
        id: "animasi",
        name: "Animasi",
        icon: "◧",
        skills: [
          { name: "Prisma 3D Legacy", level: 78 },
          { name: "Alight Motion",    level: 59 },
        ]
      },
      {
        id: "editing",
        name: "Editing",
        icon: "◨",
        skills: [
          { name: "Kinemaster",         level: 80 },
          { name: "Alight Motion",      level: 59 },
          { name: "Capcut PC Version",  level: 40 },
        ]
      },
      {
        id: "coding,
        name: "Coding",
        icon: "◩",
        skills: [
          { name: "HTML",       level: 45 },
          { name: "CSS",        level: 45 },
          { name: "Python",     level: 20 },
          { name: "JavaScript", level: 12 }
        ]
      },
      {
        id: "poster",
        name: "Poster",
        icon: "◪",
        skills: [
          { name: "Pixelab",      level: 95 },
          { name: "ALight Motion",level: 72 },
          { name: "Ibis Paint",   level: 80 },
          { name: "Canva",        level: 83 }
        ]
      }
    ]
  },

  // ---- Proyek ----
  projects: [
    {
      title: "Scene 2 Rewind Minecraft X Gacha",
      desc: "Animasi yang dibuat dengan device seadanya.",
      tags: ["React", "Node.js", "PostgreSQL"],
      thumbLabel: "inventory.app",
      url: "https://youtu.be/DlXg4sLkhqc?si=cDXL6MlGL0b0lkdg"
    },
    {
      title: "Editing Video Exe",
      desc: "Mencoba dalam mengedit hal baru yaitu video exe dan merupakan video exe pertama saya.",
      tags: ["Next.js", "Prisma", "Redis"],
      thumbLabel: "clinic.book",
      url: "https://youtu.be/WC8NwJ7q0xk?si=Cdq0T113vgD9-Rx7"
    },
    {
      title: "Toko Online Headless",
      desc: "E-commerce cepat dengan arsitektur headless dan pembayaran terintegrasi.",
      tags: ["Vue.js", "Express", "Stripe"],
      thumbLabel: "shop.store",
      url: "#"
    }
  ],

  // ---- Kontak & Footer ----
  contact: {
    socials: [
      { label: "GitHub", url: "" },
      { label: "LinkedIn", url: "#" },
      { label: "Twitter / X", url: "#" }
    ]
  },

  footerNote: "© 2026 Andra Wijaya. Dibuat dengan kode dan kopi."
};
/* =========================================================================
   =====  BATAS AREA EDIT — kode di bawah ini untuk menampilkan data  =======
   ========================================================================= */

const P = PORTFOLIO_DATA;

// ---------- Navbar & Hero ----------
document.getElementById('navInitials').textContent = P.profile.initials;
document.getElementById('navName').textContent = `${P.profile.firstName} ${P.profile.lastName}`;
document.getElementById('heroEyebrow').textContent = P.profile.eyebrow;
document.getElementById('heroName').innerHTML = `${P.profile.firstName} <span class="grad-text">${P.profile.lastName}</span>`;
document.getElementById('heroTagline').textContent = P.profile.tagline;
document.getElementById('cvBtn').href = P.profile.cvUrl;
document.getElementById('avatarBlock').textContent = P.profile.initials;

document.getElementById('heroStats').innerHTML = P.profile.stats.map(s => `
  <div class="stat"><b>${s.value}</b><span>${s.label}</span></div>
`).join('');

document.getElementById('codeBody').innerHTML = P.profile.codeLines.map(line => {
  let l = line
    .replace(/(const|let)/g, '<span class="k">$1</span>')
    .replace(/('[^']*')/g, '<span class="s">$1</span>');
  return l;
}).join('\n');

// ---------- About ----------
document.getElementById('aboutText').textContent = P.about.text;
document.getElementById('factGrid').innerHTML = P.about.facts.map(f => `
  <div class="fact-card">
    <div class="flabel">${f.label}</div>
    <div class="fvalue">${f.value}</div>
  </div>
`).join('');

// ---------- Skill Dashboard ----------
const cats = P.skillDashboard.categories;
const totalSkills = cats.reduce((n, c) => n + c.skills.length, 0);
const allLevels = cats.flatMap(c => c.skills.map(s => s.level));
const avgLevel = Math.round(allLevels.reduce((a, b) => a + b, 0) / allLevels.length);

document.getElementById('dashSummary').innerHTML = `
  <div class="sitem"><b>${totalSkills}</b><span>TOTAL SKILL</span></div>
  <div class="sitem"><b>${cats.length}</b><span>KATEGORI</span></div>
  <div class="sitem"><b>${avgLevel}%</b><span>RATA-RATA LEVEL</span></div>
  <div class="sitem"><b>5th</b><span>TAHUN BELAJAR</span></div>
`;

document.getElementById('dashFilters').innerHTML =
  `<button class="dash-filter-btn active" data-filter="all">Semua</button>` +
  cats.map(c => `<button class="dash-filter-btn" data-filter="${c.id}">${c.name}</button>`).join('');

document.getElementById('dashGrid').innerHTML = cats.map(c => `
  <div class="skill-cat" data-cat="${c.id}">
    <div class="cat-head">
      <div class="cat-icon">${c.icon}</div>
      <h3>${c.name}</h3>
      <span class="cat-count">${c.skills.length} skill</span>
    </div>
    ${c.skills.map(s => `
      <div class="skill-row">
        <div class="skill-row-top">
          <span class="sname">${s.name}</span>
          <span class="slevel">${s.level}%</span>
        </div>
        <div class="bar-track"><div class="bar-fill" data-level="${s.level}"></div></div>
      </div>
    `).join('')}
  </div>
`).join('');

// filter interaksi
document.getElementById('dashFilters').addEventListener('click', (e) => {
  const btn = e.target.closest('.dash-filter-btn');
  if (!btn) return;
  document.querySelectorAll('.dash-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filter = btn.dataset.filter;
  document.querySelectorAll('.skill-cat').forEach(card => {
    card.classList.toggle('hide', filter !== 'all' && card.dataset.cat !== filter);
  });
});

// ---------- Projects ----------
document.getElementById('projGrid').innerHTML = P.projects.map(pr => `
  <a class="proj-card reveal" href="${pr.url}" target="_blank" rel="noopener">
    <div class="proj-thumb">${pr.thumbLabel}</div>
    <div class="proj-body">
      <h3>${pr.title}</h3>
      <p>${pr.desc}</p>
      <div class="tag-row">${pr.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <span class="proj-link">Lihat detail →</span>
    </div>
  </a>
`).join('');

// ---------- Contact / Footer ----------
document.getElementById('availText').textContent = P.profile.availability;
document.getElementById('emailBtn').href = `mailto:${P.profile.email}`;
document.getElementById('socialLinks').innerHTML = P.contact.socials.map(s => `
  <a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>
`).join('');
document.getElementById('footerText').textContent = P.footerNote;

// ---------- Nav mobile toggle ----------
document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
});

// ---------- Reveal on scroll ----------
document.querySelectorAll('section > .wrap > *, .proj-card').forEach(el => el.classList.add('reveal'));
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ---------- Skill bar fill on scroll ----------
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.level + '%';
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.bar-fill').forEach(el => barObserver.observe(el));
