import display from "./displayIndex.js";
import "./seach.js";
import "./panier.js";
display("", 50, "");
const compP = document.querySelectorAll(".CompanyP");
const range = document.querySelector(".price-filter");
const displayPrice = document.querySelector(".dolarValue");

range.addEventListener("input", function () {
  const currentValue = range.value;
  displayPrice.textContent = `Value : $${currentValue}`;
  //cas de 0$
  if (parseInt(currentValue) === 0) {
    display("", -1, "");
  } else {
    display("", parseFloat(currentValue), "");
  }
});

compP.forEach((item) => {
  item.addEventListener("click", () => {
    if (range.value > 0) {
      display(`${item.textContent.toLocaleLowerCase()}`, range.value, "");

      if (item.textContent.toLocaleLowerCase() === "all") {
        display("", "", "");
      }
    }
  });
});
