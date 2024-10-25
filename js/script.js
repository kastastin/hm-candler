const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".header__menu-list");

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("menu_open");
});

const swiperFeedback = new Swiper(".feedback__slider", {
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperCertificates = new Swiper(".certificates__slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    430: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
