import './vendor';

window.addEventListener('DOMContentLoaded', () => {

  const video = document.querySelector('.video');

  function setupVideo() {
    let link = video.querySelector('.video__link');
    let button = video.querySelector('.video__button');

    video.addEventListener('click', () => {
      let iframe = createIframe();

      link.remove();
      button.remove();
      video.appendChild(iframe);
    });

    link.removeAttribute('href');
    video.classList.add('video--enabled');
  }

  function createIframe() {
    let iframe = document.createElement('iframe');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw');

    iframe.classList.add('video__media');

    return iframe;
  }

  setupVideo();


  // Tabs

  let tabs = document.querySelectorAll('.subscription');
  for (let index = 0; index < tabs.length; index++) {
    let tab = tabs[index];
    let tabsItems = tab.querySelectorAll('.subscription-nav__item');
    let tabsBlocks = tab.querySelectorAll('.subscription-body__block');
    for (let i = 0; i < tabsItems.length; i++) {
      let tabsItem = tabsItems[i];
      tabsItem.addEventListener('click', function (e) {
        for (let k = 0; k < tabsItems.length; k++) {
          let tabsItemActive = tabsItems[k];
          tabsItemActive.classList.remove('_active');
          tabsBlocks[k].classList.remove('_active');
        }
        tabsItem.classList.add('_active');
        tabsBlocks[i].classList.add('_active');
        e.preventDefault();
      });
    }
  }

  // плавный скрол до блока
  const mainBtn = document.querySelector('.button--main');
  const feedback = document.querySelector('.subscription');

  function scrollTo(el) {
    window.scroll({
      left: 0,
      top: el.offsetTop,
      behavior: 'smooth',
    });
  }

  mainBtn.addEventListener('click', () => {
    scrollTo(feedback);
  });

  // localstorage
  const formInput = document.querySelectorAll('input');

  formInput.forEach((el) => {
    el.addEventListener('change', changeHandler);
  });

  // записывает изменение значения инпута в localStorage
  function changeHandler(e) {
    localStorage.setItem(e.target.name, e.target.value);
  }

  // записывает значения инпута из localStorage в инпут формы
  function getCheckStorage() {
    for (let i = 0; i < formInput.length; i++) {
      formInput[i].value = localStorage.getItem(formInput[i].name);
    }
  }
  getCheckStorage();
});

/* eslint-disable no-new */
/* eslint-disable no-undef */
// Swiper 7.4.1


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
