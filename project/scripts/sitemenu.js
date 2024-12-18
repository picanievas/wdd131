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

const menu = [
  {
    linkname: "Home",
    linkpath: "./index.html",
  },
  {
    linkname: "Board Game Album",
    linkpath: "./boardgamealbum.html",
  },
  {
    linkname: "Submit a game",
    linkpath: "./submitform.html",
  },
];

function displayMenu(menulinks) {
  menulinks.forEach((menulink) => {
    let link = document.createElement("a");
    link.innerText = menulink.linkname;
    link.href = menulink.linkpath;
    document.querySelector(".navigation-menu").appendChild(link);
  });
}

displayMenu(menu);

// find the h1 with a title class name and set the title
// document.querySelector("h1.title").innerText = "Pica";
