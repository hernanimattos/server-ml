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

const getProductByIdResolver = async args => {
  const { id } = args;
  console.log(id);
  const { data } = await Http.get(`items/${id}`);
  // console.log(data, 'kkkkk');
  const { title, price: value, pictures, condition } = data;
  const picture = pictures[0].url;

  const t = await getDescriptions(id);
  console.log(t);

  return {
    item: {
      title,
      price: {
        value
      },
      picture,
      condition,
      description: await getDescriptions(id)
    }
  };
};

const getDescriptions = async id => {
  let description = null;
  try {
    const { data = {} } = await Http.get(`items/${id}/description`);
    const { plain_text = null } = data;
    description = plain_text;
  } catch (e) {
    description = 'Não possui';
  }

  return description.replace(/(\r\n|\n|\r)/gm, '');
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

export { searchProductsResolver, getProductByIdResolver };
