import {
  ApolloServer,
} from 'apollo-server';

import { typeDefs, resolvers } from './graphql/types/product/product';

const server = new ApolloServer(
  {
    typeDefs,
    resolvers,
    context: ({ req }) => {
      const {
        headers: {
          authorization,
        },
      } = req;

      return authorization;
    },
  },
);

server.listen().then(({ url }) => {
  console.warn(`Server ready at ${url}`); // eslint-disable-line
});
