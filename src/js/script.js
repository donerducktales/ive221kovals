`use strict`

// variables
const menuHamburger = document.querySelector(`.nav__menu-hamburger`);
const mobileMenu = document.querySelector(`.nav__mobile-menu`);

// menu hamburger
menuHamburger.addEventListener(`click`, () => {
   menuHamburger.classList.toggle(`active`);
   mobileMenu.classList.toggle(`active`);
});

window.addEventListener(`scroll`, () => {
   if (window.scrollY > 320) {
      menuHamburger.classList.remove(`active`);
      mobileMenu.classList.remove(`active`);
   }
});

