const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];

function updateProducts(productList) {
  const selectBox = document.getElementById("product-name");

  productList.forEach((product) => {
    const bob = document.createElement("option");
    bob.value = product.averagerating;
    bob.innerText = product.name;
    bob.id = product.id;

    selectBox.appendChild(bob);
  });
}

updateProducts(products);

if (!localStorage.getItem("reviewcounter")) {
  localStorage.setItem("reviewcounter", 0);
}

const reviewform = document.getElementById("reviewform");
reviewform.addEventListener("submit", () => {
  let currentCounter = parseInt(localStorage.getItem("reviewcounter"), 10);
  currentCounter += 1;
  localStorage.setItem("reviewcounter", currentCounter);
});
