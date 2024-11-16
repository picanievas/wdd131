const hamburger_icon = document.querySelector(".hamburger-icon");
const hamburger_close = document.querySelector(".hamburger-close");
const navigation_menu = document.querySelector(".navigation-menu");

hamburger_icon.addEventListener("click", function hamburgerClick() {
  navigation_menu.style.display = "flex";
  hamburger_close.style.display = "block";
});

hamburger_close.addEventListener("click", function hamburgerCloseClick() {
  navigation_menu.style.display = "none";
  hamburger_close.style.display = "none";
  hamburger_icon.style.display = "block";
});
