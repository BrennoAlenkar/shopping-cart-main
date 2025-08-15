
const fetchProducts = async (query) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    if (!response.ok) {
      // Se a resposta não for ok (ex: 401), retorna array vazio
      return [];
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    // Se ocorrer erro de rede ou outro, retorna array vazio
    return [];
  }
};

export default fetchProducts;
