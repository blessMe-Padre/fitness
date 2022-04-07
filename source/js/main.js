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

});
