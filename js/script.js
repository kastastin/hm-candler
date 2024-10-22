const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".header__menu-list");

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("menu_open");
  // if (menuList.classList.contains("menu_open") && menuList.style.zIndex == 1) {
  //   menuList.style.zIndex = "-1";
  //   setTimeout(() => {
  //     menuList.classList.remove("menu_open");
  //   }, 150);
  //   return;
  // }

  // menuList.classList.toggle("menu_open");
  // if (menuList.classList.contains("menu_open")) {
  //   setTimeout(() => {
  //     menuList.style.zIndex = "1";
  //   }, 300);
  // } else {
  //   menuList.style.zIndex = "-1";
  // }
});
