import display from "./displayIndex.js";

//Searches
const search = document.querySelector(".txtSearch");

search.addEventListener("keyup", (e) => {
  e.preventDefault();
  const value = search.value;
  display("", "", value);
  if (!value) {
    return;
  }
});
