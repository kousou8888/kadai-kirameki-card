let mySwiper3 = new Swiper ('#swiper03', {
  loop: false,
  spaceBetween: 30,
  centeredSlides: true,
  offsetSlidesBefore: 3,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',  //fraction タイプ
    renderFraction: function (currentClass, totalClass) {
      return '0' + '<span class="' + currentClass + '"></span>' + ' / ' + '0' + '<span class="' + totalClass + '"></span>';
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 640px
    767: {
      spaceBetween: 50
    }
  },
});


// ハンバーガーメニュー
function toggleNav() {
  const body = document.body;
  const hamburger = document.getElementById('js-hamburger');

  hamburger.addEventListener('click', function() {
      body.classList.toggle('nav-open');
  });
}
toggleNav();


// アコーディオン
function accordion() {
  const title = document.getElementsByClassName('js-accordion-title');
  for(let i = 0; i < title.length; i++) {
    title[i].onclick = function() {
        console.log(i)
        let titleEach = title[i];
        let content = titleEach.nextElementSibling;
        titleEach.classList.toggle('is-active');
        content.classList.toggle('is-open');
    };
  }; 
};
accordion();