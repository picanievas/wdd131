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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Redlands California",
    location: "Redlands, California, United States",
    dedicated: "2003, September, 14",
    area: 17300,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/redlands-california/400x250/redlands-temple-lds-766820-wallpaper.jpg",
  },
  {
    templeName: "Phoenix Arizona",
    location: "Phoenix, Arizona, United States",
    dedicated: "2014, November, 16",
    area: 64870,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/phoenix-arizona/400x250/phoenix-arizona-temple-1284079-wallpaper.jpg",
  },
  {
    templeName: "San Juan Puerto Rico",
    location: "San Juan, Puerto Rico, United States",
    dedicated: "2023, January, 15",
    area: 6988,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-juan-puerto-rico/400x250/san_juan_puerto_rico_temple_exterior.jpeg",
  },
];

function displayTemples(filteredTemples) {
  const templeContainer = document.querySelector(".temple-grid");
  templeContainer.innerHTML = ""; // Clear existing content

  filteredTemples.forEach((temple) => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    name.innerText = temple.templeName;

    let location = document.createElement("div");
    location.innerHTML = `<label>Location:</label> ${temple.location}`;

    let dedicated = document.createElement("div");
    dedicated.innerHTML = `<label>Dedicated:</label> ${temple.dedicated}`;

    let area = document.createElement("div");
    area.innerHTML = `<label>Size:</label> ${temple.area} sq ft`;

    let image = document.createElement("img");
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("loading", "lazy");
    image.setAttribute("class", "temple-photo ");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);

    document.querySelector(".temple-grid").appendChild(card);
  });
}

displayTemples(temples);

document.querySelector("#old").addEventListener("click", function (event) {
  event.preventDefault();
  const oldTemples = temples.filter((temple) => {
    const dedicatedYear = parseInt(temple.dedicated.split(",")[0]);
    return dedicatedYear < 1900;
  });
  displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", function (event) {
  event.preventDefault();
  const newTemples = temples.filter((temple) => {
    const dedicatedYear = parseInt(temple.dedicated.split(",")[0]);
    return dedicatedYear > 2000;
  });
  displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", function (event) {
  event.preventDefault();
  const largeTemples = temples.filter((temple) => temple.area > 90000);
  displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", function (event) {
  event.preventDefault();
  const smallTemples = temples.filter((temple) => temple.area < 10000);
  displayTemples(smallTemples);
});

document.querySelector("#home").addEventListener("click", function (event) {
  event.preventDefault();
  displayTemples(temples);
});
