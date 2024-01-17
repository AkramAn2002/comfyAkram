const urlParams = new URLSearchParams(window.location.search);

const productId = urlParams.get("id");
const URL = `https://course-api.com/javascript-store-single-product?id=${productId}`;
//fetch produit

const product = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  return data;
};
export default product;
