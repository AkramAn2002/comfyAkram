import product from "./fetchProduct.js";

const products = async () => {
  const produit = await product();
  console.log("those", produit);
};
product();
export default products;
