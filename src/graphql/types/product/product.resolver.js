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

  const { free_shipping = 0 } = shipping || {};
  const { amount = 0 } = installments || {};
  const { pictures, sold_quantity, price: value } = await getProduct(id);

  return {
    id,
    title,
    price: {
      value,
      currency,
      decimals: await getDecimals(currency),
      amount
    },
    description: await getDescriptions(id),
    condition,
    free_shipping,
    picture: pictures[0].url,
    sold_quantity
  };
};

const getProduct = async id => {
  const { data } = await Http.get(`items/${id}`);
  const { pictures, sold_quantity, price } = data;
  return {
    pictures,
    sold_quantity,
    price
  };
};

const getDescriptions = async id => {
  const { data = {} } = await Http.get(`items/${id}/description`);
  const { plain_text = null } = data;

  return plain_text;
};

const getAllCategories = filters =>
  filters
    .filter(categorie => categorie.id === 'category')
    .map(name => {
      const { values } = name;
      return values.map(e => e.name);
    })
    .reduce((a, b) => [a + b], []);

const searchProductsResolver = async term => {
  const { term: productToSearch } = term;
  const { data } = await Http.get(`sites/MLA/search?q=${productToSearch}`);
  const { results, available_filters } = data;
  const items = results.map(async prod => getProducType(prod));

  return {
    categories: await getAllCategories(available_filters),
    items
  };
};

export { searchProductsResolver };
