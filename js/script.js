const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".header__menu-list");

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("menu_open");
});
