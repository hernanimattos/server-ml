import { gql } from 'apollo-server';
import { searchProductsResolver } from './product.resolver';

const typeDefs = gql`
  type Author {
    name: String
    lastname: String
  }

  type Price {
    currency: String
    amount: Float
    decimals: Float
    value: Float
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
    product(id: ID!): Product!
  }
`;

const resolvers = {
  Query: {
    // eslint-disable-next-line no-unused-vars
    searchProducts: (teobj, args, context, info) => searchProductsResolver(args)
  }
};

export { typeDefs, resolvers };
