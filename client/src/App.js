import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';


import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

// establish a link to the GraphQL server at its /graphql endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});
// use the ApolloClient() constructor to instantiate the Apollo Client instance , create the connection to the API endpoint, and instantiate a new cache object for memory
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Home />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
