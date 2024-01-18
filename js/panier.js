import setItems from "./setProduct.js";

const container = document.querySelector(".card");
const prodContainer = document.querySelector(".prodContainer");
const sideBarPanier = document.querySelector(".sideBar-overly ");
const togglih = document.querySelector(".toggleBackColor");
const containerMOM = document.querySelector(".xxx ");
const panier = document.querySelector(".nombre");
const totalH = document.querySelector(".h3Bis");
let i = parseInt(localStorage.getItem("cartItemCount"));
let produitsAjoutes = JSON.parse(localStorage.getItem("produitsAjoutes")) || [];
let total = 0;
let size = produitsAjoutes.length;

produitsAjoutes.map((prod) => {
  total += prod.price * prod.quantity;
});
panier.innerHTML = `<span class="cart-item-count">${parseInt(
  localStorage.getItem("cartItemCount")
)}</span>`;
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
i = produitsAjoutes.length;
/************************************************************************************/
let containers = "";
container.addEventListener("click", function (event) {
  if (event.target.classList.contains("product-cart-btn")) {
    const dataId = event.target.dataset.id;
    const infos = setItems(dataId);
    /************************************************************************************/
    // if (setItems(dataId).id === dataId) {
    //   i++;
    // }

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

    sideBarPanier.classList.add("show");
    togglih.classList.add("show2");
    const htmlString = produitsAjoutes
      .map(
        (produit) => `
        <div class="prodContainer">
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
    localStorage.setItem("produitsAjoutes", JSON.stringify(produitsAjoutes));

    total += infos.price;
    localStorage.setItem("total", JSON.stringify(total));
    totalH.innerHTML = `Total : $${total.toFixed(2)}`;

    const storedTotal = JSON.parse(localStorage.getItem("total"));
    localStorage.setItem("total", storedTotal);
    localStorage.setItem("cartItemCount", produitsAjoutes.length);
    panier.innerHTML = `<span class="cart-item-count">${produitsAjoutes.length}</span>`;
  }

  if (event.target.classList.contains("fas")) {
    const parentElement = event.target.parentNode;
    const dataId = parentElement.dataset.id;
    const infos = setItems(dataId);
    /************************************************************************************/
    // if (setItems(dataId).id === dataId) {
    //   i++;
    // }

    if (!Array.isArray(produitsAjoutes)) {
      produitsAjoutes = [];
    }

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

    sideBarPanier.classList.add("show");
    togglih.classList.add("show2");

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

    localStorage.setItem("produitsAjoutes", JSON.stringify(produitsAjoutes));

    total += infos.price;
    localStorage.setItem("total", JSON.stringify(total));
    totalH.innerHTML = `Total : $${total.toFixed(2)}`;

    const storedTotal = JSON.parse(localStorage.getItem("total"));
    localStorage.setItem("total", storedTotal);

    localStorage.setItem("cartItemCount", produitsAjoutes.length);
    panier.innerHTML = `<span class="cart-item-count">${produitsAjoutes.length}</span>`;
  }
});

containerMOM.addEventListener("click", function (event) {
  const target = event.target;

  if (target.id.startsWith("plus")) {
    const partie2 = target.id.split("_")[1];
    const produitClique = produitsAjoutes.find(
      (produit) => produit.id === partie2
    );

    if (produitClique) {
      produitClique.quantity++;

      const quantityElement = target.nextElementSibling;

      if (quantityElement) {
        quantityElement.textContent = produitClique.quantity;
      }

      total += produitClique.price;
      localStorage.setItem("total", JSON.stringify(total));
      totalH.innerHTML = `Total : $${total.toFixed(2)}`;
    }
  }

  if (target.id.startsWith("moin")) {
    const partie2 = target.id.split("_")[1];
    const produitClique = produitsAjoutes.find(
      (produit) => produit.id === partie2
    );

    if (produitClique) {
      produitClique.quantity--;

      if (produitClique.quantity === 0) {
        produitClique.quantity = 0;
        const index = produitsAjoutes.indexOf(produitClique);
        produitsAjoutes.splice(index, 1);
        localStorage.setItem("cartItemCount", produitsAjoutes.length);
        panier.innerHTML = `<span class="cart-item-count">${produitsAjoutes.length}</span>`;
        target.id = "btnX";
      }

      const quantityElement = target.previousElementSibling;

      if (quantityElement) {
        if (quantityElement.textContent <= "-1") {
          quantityElement.textContent = "0";
        }

        quantityElement.textContent = produitClique.quantity;
      }
    }

    total -= produitClique.price;
    localStorage.setItem("total", JSON.stringify(total));
    totalH.innerHTML = `Total : $${total.toFixed(2)}`;
  }

  if (target.id.startsWith("btnX")) {
    const partie2 = target.id.split("_")[1];
    const container = target.closest(".prodContainer");

    const produitClique = produitsAjoutes.find(
      (produit) => produit.id === partie2
    );

    if (produitClique) {
      total -= produitClique.price * produitClique.quantity;
      const index = produitsAjoutes.indexOf(produitClique);
      produitsAjoutes.splice(index, 1);
      localStorage.setItem("cartItemCount", produitsAjoutes.length);
      panier.innerHTML = `<span class="cart-item-count">${produitsAjoutes.length}</span>`;
    }
    totalH.innerHTML = `Total : $${total.toFixed(2)}`;
    localStorage.setItem("total", JSON.stringify(total));
    localStorage.setItem("produitsAjoutes", JSON.stringify(produitsAjoutes));
    container.remove();
  }
});

totalH.innerHTML = `Total : $${total.toFixed(2)}`;
localStorage.setItem("total", JSON.stringify(total));
