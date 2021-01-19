const apiUrl = 'https://corebiz-test.herokuapp.com/api/v1';

const getProducts = () => {
  const products = fetch(`${apiUrl}/products`).then(r => r.json());
  return products;
};

export {
  getProducts,
};