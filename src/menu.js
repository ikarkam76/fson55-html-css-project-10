(() => {
  const mobileMenu = document.querySelector('.header__menu');
  const openMenuBtn = document.querySelector('.menu__btn--open');
  const closeMenuBtn = document.querySelector('.menu__btn--close');
  const menuItemSelect = document.querySelector('.menu__list');

  

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  menuItemSelect.addEventListener('click', () => {
   mobileMenu.classList.remove('is-open');
  })
  

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
