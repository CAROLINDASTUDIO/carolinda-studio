// CAROLINDA STUDIO – Startseite: Scroll-Effekte
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => nav.classList.toggle('solid', window.scrollY > 40), { passive: true });

const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// sanftes Mitwandern des Leuchtens im Hero
const glow = document.querySelector('.hero .glow');
window.addEventListener('scroll', () => { if (glow) glow.style.top = (100 + window.scrollY * 0.25) + 'px'; }, { passive: true });
