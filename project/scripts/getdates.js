const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastModified");

const today = new Date();
currentyear.innerHTML = today.getFullYear();
lastmodified.innerHTML = document.lastModified;
