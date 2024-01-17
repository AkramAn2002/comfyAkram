import fetchProduit from "./fetchProducts.js";

const card = document.querySelector(".card");

const display = async (comp, prix, nom) => {
  const newProds = await fetchProduit();

  let arrayProds = newProds.map((produit) => {
    const { id, fields } = produit;
    const { name, price, company } = produit.fields;
    const { url } = produit.fields.image[0];
    const priceDividedBy1000 = price / 100;
    return { url, name, price: priceDividedBy1000, id, company };
  });
  localStorage.setItem("produits", JSON.stringify(arrayProds));
  let varible = arrayProds;
  // Vérifie si le chemin de l'URL est égal à "index.html"
  if (window.location.href.endsWith("/html/index.html")) {
    const arrayProds1 = arrayProds.slice(0, 3);
    varible = arrayProds1;
  }
  if (window.location.href.endsWith("html/products.html")) {
    if (comp) {
      varible = arrayProds.filter((item) => item.company === comp);
    }

    if (prix) {
      varible = arrayProds.filter((item) => item.price <= prix); //localStorage
    } else {
      card.classList.add("none");
    }

    if (prix && comp) {
      varible = arrayProds.filter(
        (item) => item.company === comp && item.price <= prix
      );
    }
    if (nom) {
      varible = arrayProds.filter(
        (item) =>
          item.name === nom ||
          item.name.toLowerCase().startsWith(nom.toLowerCase())
      );
    }
    if (varible.length < 1) {
      const products = document.querySelector(".products-container");
      products.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
    } else {
      const products = document.querySelector(".products-container");
      products.innerHTML = `<h3 class="filter-error"></h3>`;
    }
  }
  const hmtlString = varible.map((item) => {
    return `
     <div class="card-container" data-company="${item.company}">
      <img src="${item.url}" alt="Image" class="card-image" />
      <div class="product-icons">
        <a href="product.html?id=${item.id}" class="product-icon">
          <i class="fas fa-search"></i>
        </a>
        <button class="product-cart-btn product-icon" data-id="${item.id}">
          <i class="fas fa-shopping-cart"></i>
        </button>
      </div>
      <div class="card-text">
        <p class="card-label">${item.name} </p>
        <p class="card-price">$${item.price}</p>
      </div>
    </div>
     `;
  });
  card.innerHTML = hmtlString.join("");
};
export default display;
