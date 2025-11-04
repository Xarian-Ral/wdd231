const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
  navToggle.setAttribute('aria-expanded', String(!expanded));
  if (primaryNav.style.display === 'block') {
    primaryNav.style.display = '';
    navToggle.setAttribute('aria-label', 'Open navigation');
  } else {
    primaryNav.style.display = 'block';
    navToggle.setAttribute('aria-label', 'Close navigation');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 720) {
    primaryNav.style.display = '';
    navToggle.setAttribute('aria-expanded', 'false');
  }
});
