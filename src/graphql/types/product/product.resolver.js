import Http from '../../../http';

const getDecimals = async currency => {
  const currentCurrency = await Http.get(`currencies/${currency}`);
  const { data } = currentCurrency;
  const { decimal_places } = data;
  return decimal_places;
};

const getProducType = async prod => {
  const {
    id,
    title,
    currency_id: currency,
    installments,
    condition,
    shipping
  } = prod;

  const { free_shipping } = shipping;
  const { amount } = installments;
  const { pictures, sold_quantity } = await getProduct(id);

  return {
    id,
    title,
    price: {
      currency,
      decimals: await getDecimals(currency),
      amount
    },
    condition,
    free_shipping,
    picture: pictures[0].url,
    sold_quantity: sold_quantity
  };
};

const getProduct = async id => {
  const { data } = await Http.get(`items/${id}`);
  const { pictures, sold_quantity } = data;
  return {
    pictures,
    sold_quantity
  };
};

const getAllCategories = filters =>
  filters
    .filter(categorie => categorie.id === 'category')
    .map(name => {
      const { values } = name;
      return values.map(e => e.name);
    })
    .reduce((a, b) => [a + b], []);

const produsearchProductsResolver = async term => {
  console.log(term, 'hhh');
  const { data } = await Http.get(`sites/MLA/search?q=${term}`);
  const { results, available_filters } = data;
  const items = results.map(async prod => getProducType(prod));

  return {
    categories: await getAllCategories(available_filters),
    items
  };
};

export { produsearchProductsResolver };
