import { gql } from 'apollo-server';
import { produsearchProductsResolver } from './product.resolver';

// console.log(ProductResolver, 'kkkkk');

const typeDefs = gql`
  type Author {
    name: String
    lastname: String
  }

  type Price {
    currency: String
    amount: Float
    decimals: Float
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
    searchProducts: (teobj, args, context, info) =>
      produsearchProductsResolver(args)
  }
};

export { typeDefs, resolvers };
