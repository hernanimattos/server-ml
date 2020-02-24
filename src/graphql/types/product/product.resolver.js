/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
import Http from '../../../http';

const getDecimals = async (currency) => {
  const currentCurrency = await Http.get(`currencies/${currency}`);
  const { data } = currentCurrency;
  const { decimal_places } = data;
  return decimal_places;
};

const getProducType = async (prod) => {
  const {
    id,
    title,
    currency_id: currency,
    installments,
    condition,
    shipping,
  } = prod;

  const { free_shipping } = shipping;
  const { amount } = installments;

  return {
    id,
    title,
    price: {
      currency,
      decimals: await getDecimals(currency),
      amount,
    },
    condition,
    free_shipping,
    picture: await getProduct(id).secure_url,
    sold_quantity: await getProduct(id).sold_quantity,
  };
};


const getProduct = async (id) => {
  const { data } = await Http.get(`items/${id}`);
  const { pictures, sold_quantity } = data;
  return {
    pictures,
    sold_quantity,
  };
};

const getAllCategories = (filters) => filters
  .filter((categorie) => categorie.id === 'category')
  .map((name) => {
    const { values } = name;
    return values.map((e) => e.name);
  }).reduce((a, b) => [a + b], []);


const produsearchProductsResolver = async (term) => {
  const { data } = await Http.get(`sites/MLA/search?q=${term}`);
  const { results, available_filters } = data;
  const items = results.map(async (prod) => getProducType(prod));

  return {
    categories: await getAllCategories(available_filters),
    items,
  };
};

export {
  produsearchProductsResolver,
};
