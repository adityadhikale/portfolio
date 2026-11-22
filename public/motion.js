const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');

window.addEventListener('scroll', () => header?.classList.toggle('is-scrolled', window.scrollY > 18), { passive: true });

menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  menu?.classList.toggle('is-open', !expanded);
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu?.classList.contains('is-open')) {
    menuToggle?.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
    menuToggle?.focus();
  }
});

menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuToggle?.setAttribute('aria-expanded', 'false');
  menu.classList.remove('is-open');
}));

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible'));
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

  const rotator = document.querySelector('[data-rotator]');
  const lines = [
    'products that solve practical problems.',
    'tools for people and teams.',
    'technology with business context.',
  ];
  let lineIndex = 0;
  if (rotator) {
    window.setInterval(() => {
      rotator.classList.add('is-changing');
      window.setTimeout(() => {
        lineIndex = (lineIndex + 1) % lines.length;
        rotator.textContent = lines[lineIndex];
        rotator.classList.remove('is-changing');
      }, 220);
    }, 3200);
  }

  const orbit = document.querySelector('[data-orbit]');
  if (orbit) {
    window.addEventListener('scroll', () => {
      const progress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
      orbit.style.setProperty('--scroll-turn', `${progress * 18}deg`);
    }, { passive: true });
  }
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
}
