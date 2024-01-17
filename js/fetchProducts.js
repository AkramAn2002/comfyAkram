const URL = "https://course-api.com/javascript-store-products";

const products = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};
export default products;
