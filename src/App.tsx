import React from 'react';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { Boat } from './Boat';

const client = new ApolloClient({
  uri: 'https://vortex.korabli.su/api/graphql/glossary',
  cache: new InMemoryCache(),
});

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Boat />
  </ApolloProvider>
);

export default App;
