const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.m-menu');
if (menuButton && menu) {
  menuButton.hidden = false;
  document.documentElement.classList.add('menu-ready');
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
  };
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('is-open', !expanded);
  });
  menu.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      closeMenu();
      menuButton.focus();
    }
  });
  document.addEventListener('click', event => { if (!event.target.closest('.m-nav')) closeMenu(); });
  window.matchMedia('(min-width: 1100px)').addEventListener('change', closeMenu);
}
const legacySections = {
  '#examples': './examples.html#examples',
  '#pricing': './pricing.html#pricing',
  '#order': './contact.html#order',
  '#how-it-works': './how-it-works.html#how-it-works',
  '#testimonials': './poem-and-design.html',
};
if (document.body.classList.contains('m-home')) {
  const preserveLegacyLink = () => {
    const destination = legacySections[window.location.hash];
    if (destination) window.location.replace(destination);
  };
  preserveLegacyLink();
  window.addEventListener('hashchange', preserveLegacyLink);
}
