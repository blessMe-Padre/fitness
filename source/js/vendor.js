/* eslint-disable no-new */
/* eslint-disable no-undef */
// Swiper 7.4.1

import './vendor/swiper';
if (document.querySelector('.trainer__slider')) {
  new Swiper('.trainer__slider', {
    observer: true,
    slidesPerView: 4,
    loop: true,
    spaceBetween: 34,
    navigation: {
      nextEl: '.trainer__btn-next',
      prevEl: '.trainer__btn-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
}

if (document.querySelector('.reviews__slider')) {
  new Swiper('.reviews__slider', {
    observer: true,
    slidesPerView: 1,
    slidePerGroup: 1,
    infinite: false,
    loop: false,
    navigation: {
      nextEl: '.reviews__btn-next',
      prevEl: '.reviews__btn-prev',
    },
  });
}
