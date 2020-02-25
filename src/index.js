import { ApolloServer } from 'apollo-server';

import { typeDefs, resolvers } from './graphql/types/product/product';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const {
      // eslint-disable-next-line comma-dangle
      headers: { authorization }
    } = req;

    return authorization;
    // eslint-disable-next-line comma-dangle
  }
});

server.listen().then(({ url }) => {
  console.warn(`Server ready at ${url}`); // eslint-disable-line
});
