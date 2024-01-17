import product from "./fetchProduct.js";
import setItems from "./setProduct.js";

const container = document.querySelector(".single-product");
const locali = document.querySelector(".location");
const btnAdd = document.querySelector(".addToCartBtn");
const sideBarPanier = document.querySelector(".sideBar-overly ");
const togglih = document.querySelector(".toggleBackColor");
const panier = document.querySelector(".nombre");
const totalH = document.querySelector(".h3Bis");
const containerMOM = document.querySelector(".xxx ");
let total = 0;

const produit = await product();
const { id, fields } = produit;
const { name, price, company, description } = produit.fields;
const { url } = produit.fields.image[0];
const priceDividedBy1000 = price / 100;
async function displayProduct() {
  container.innerHTML = `
    <div class="section-center single-product-center">
      <img src="${url}" class="single-product-img img" alt="" />
      <article class="single-product-info">
        <div>
          <h2 class="single-product-title">${name}</h2>
          <p class="single-product-company text-slanted">${company}</p>
          <p class="single-product-price">$${priceDividedBy1000}</p>
          <p class="single-product-desc">${description}</p>
        </div>
      </article>
    </div>
  `;

  locali.innerHTML = `HOME/${name}`;
}

displayProduct();

btnAdd.addEventListener("click", function (event) {
  // Assuming setItems returns an object with necessary information
  const infos = setItems(id);

  let produitsAjoutes =
    JSON.parse(localStorage.getItem("produitsAjoutes")) || [];
  const existingProductIndex = produitsAjoutes.findIndex(
    (produit) => produit.id === infos.id
  );

  if (existingProductIndex !== -1) {
    produitsAjoutes[existingProductIndex].quantity += 1;
  } else {
    produitsAjoutes.push({
      id: infos.id,
      url: infos.url,
      name: infos.name,
      price: infos.price,
      quantity: 1,
    });
  }

  localStorage.setItem("produitsAjoutes", JSON.stringify(produitsAjoutes));

  // Assuming sideBarPanier, togglih, total, and panier are defined somewhere
  sideBarPanier.classList.add("show");
  togglih.classList.add("show2");

  // Assuming totalH is defined somewhere
  total += infos.price;
  localStorage.setItem("total", JSON.stringify(total));
  totalH.innerHTML = `Total : $${total.toFixed(2)}`;

  const storedTotal = JSON.parse(localStorage.getItem("total"));
  const htmlString = produitsAjoutes
    .map(
      (produit) => `
    <div class="prodContainer" id="container">
      <div>
        <img src="${produit.url}" alt="" />
      </div>
      <div class="infosProd">
        <p class="lableProd">${produit.name}</p>
        <p class="lableProd"><b>$${produit.price}</b></p>
        <button type="button" class="lableProd lbl" id="btnX_${produit.id}">remove</button>
      </div>
      <div class="elementPlusMoin">
        <button class="plus" id="plus_${produit.id}" data-id="${produit.id}"><i class="fas fa-chevron-up" style="pointer-events: none;"></i></button>
        <h3>${produit.quantity}</h3>
        <button class="moin" id="moin_${produit.id}" data-id="${produit.id}"><i class="fas fa-chevron-down" style="pointer-events: none;"></i></button>
      </div>
    </div>
  `
    )
    .join("");

  containerMOM.innerHTML = htmlString;
  localStorage.setItem("total", storedTotal);
  localStorage.setItem("cartItemCount", produitsAjoutes.length);
  panier.innerHTML = `<span class="cart-item-count">${parseInt(
    localStorage.getItem("cartItemCount")
  )}</span>`;
});
