import Swiper from '../../../scripts/plugins/swiper/swiper-bundle.min.js';

const swiper = new Swiper(".js-slider", {
  effect: "coverflow",
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  coverflowEffect: {
    scale: .9,
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1,
    slideShadows: false,
  },
  breakpoints: {
    1279: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
    }
  },
  loop: true,
});



