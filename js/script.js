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
  },
});

const swiperCertificates = new Swiper(".certificates__slider", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination",
  },
});
