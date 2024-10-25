const menuBtn = document.querySelector(".menu__btn");
const navLinks = document.querySelectorAll(".menu__list-link");
const menuList = document.querySelector(".header__menu-list");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    menuList.classList.remove("menu_open");
    
    const href = link.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    const adaptiveOffset = window.innerWidth < 640 ? 25 : 75;

    const additionalOffset = ["#about", "#team"].some((item) => item === href)
      ? 0
      : adaptiveOffset;

    console.log(["#about", "#team"].some((item) => item === href));

    scroll({
      top: offsetTop - additionalOffset,
      behavior: "smooth",
    });
  });
});

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("menu_open");
});

const accordion = document.querySelector(".accordion");
const accordionTitles = document.querySelectorAll(".accordion__title");

accordionTitles.forEach((title) => {
  title.addEventListener("click", () => {
    const currentText = title.parentElement.querySelector(".accordion__text");

    title.classList.toggle("accordion__title_active");
    currentText.classList.toggle("accordion__text_visible");

    if (currentText.classList.contains("accordion__text_visible")) {
      currentText.style.maxHeight = currentText.scrollHeight + "px";
    } else {
      currentText.style.maxHeight = 0;
    }
  });
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
