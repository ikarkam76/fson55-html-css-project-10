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

  menuItemSelect.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('is-open');
  }
})();

(() => {
  const refs1 = {
    openModalBtn1: document.querySelector('[data-modal-open1]'),
    modal1: document.querySelector('[data-modal1]'),
  };
  refs1.openModalBtn1.addEventListener('click', toggleModal1);
  function toggleModal1() {
    refs1.modal1.classList.toggle('is-hidden');
    document.body.classList.toggle('is-open');
  }
})();
