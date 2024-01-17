function setItems(id) {
  const produitsEnregistres =
    JSON.parse(localStorage.getItem("produits")) || [];

  const produitRecherche = produitsEnregistres.find(
    (produit) => produit.id === id
  );
  return produitRecherche;
}
export default setItems;
