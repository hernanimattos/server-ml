import { gql } from 'apollo-server';
import {
  searchProductsResolver,
  getProductByIdResolver
} from './product.resolver';

const typeDefs = gql`
  type Author {
    name: String
    lastname: String
  }

  type Price {
    currency: String
    amount: Float
    decimals: Float
    value: String
  }

  type Item {
    id: String
    title: String
    price: Price
    picture: String
    condition: String
    free_shipping: Boolean
    description: String
    sold_quantity: Float
  }

  type Products {
    author: Author
    categories: [String]
    items: [Item]
  }

  type Product {
    author: Author
    item: Item
  }

  type Query {
    searchProducts(term: String!): Products!
    getProductById(id: String!): Product!
  }
`;

const resolvers = {
  Query: {
    // eslint-disable-next-line no-unused-vars
    searchProducts: (obj, args, context, info) => searchProductsResolver(args),
    getProductById: (obj, args, context, info) => getProductByIdResolver(args)
  }
};

export { typeDefs, resolvers };
