// // ./apollo-client.js
import fetch from 'isomorphic-unfetch'
// import { ApolloClient, InMemoryCache } from "@apollo/client";
// // import { ApolloClient } from "apollo-boost";
// // import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from "apollo-link-http";
// import { setContext } from 'apollo-link-context'
// import Cookies from "js-cookie";

import { ApolloClient, InMemoryCache } from "@apollo/client";

const httpLink = createHttpLink({ uri: process.env.GQL_URL })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;

// const httpLink = createHttpLink({ uri: 'http://localhost:1337/graphql', // my wordpress graphql 
// fetch: fetch })

// // const authLink = setContext((_, { headers }) => {
// //   const token = Cookies.get('jwt')

// //   return {
// //     headers: {
// //       ...headers,
// //       authorization: `Bearer ${token}`
// //     }
// //   }
// // })

// const client = new ApolloClient({
//   link: httpLink,
//   // link: authLink.concat(httpLink),
//   cache: new InMemoryCache
// })

// export default client
