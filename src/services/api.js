export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await response.json();
  console.log(data);
  return data;
}

getCategories();

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  let data = '';
  if (categoryId) {
    const idResponse = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    data = await idResponse.json();
  } else if (query) {
    const queryResponse = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    data = await queryResponse.json();
  } else {
    data = {};
  }
  return data;
}
