/****************Toggling*********************/
//sideBars
const sideBar = document.querySelector(".sideBar-overly"); //btnShop
const sideBar2 = document.querySelector(".sidebar2-overlay"); //btnBars
//buttons
const btnShop = document.querySelector(".Panier");
const btnBars = document.querySelector(".toggleBtn");
const btnClose = document.querySelector(".btnX1");
const btnClose2 = document.querySelector(".btnX2");
const togglih = document.querySelector(".toggleBackColor");
//traitement1
btnShop.addEventListener("click", () => {
  sideBar.classList.add("show");
  togglih.classList.add("show2");
});
btnBars.addEventListener("click", () => {
  sideBar2.classList.add("show2");
  togglih.classList.add("show2");
});

btnClose.addEventListener("click", () => {
  sideBar.classList.remove("show");
  togglih.classList.remove("show2");
});
btnClose2.addEventListener("click", () => {
  sideBar2.classList.remove("show2");
  togglih.classList.remove("show2");
});
