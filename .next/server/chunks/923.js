exports.id = 923;
exports.ids = [923];
exports.modules = {

/***/ 5923:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1071);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8701);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8074);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
// // ./apollo-client.js
 // import { ApolloClient, InMemoryCache } from "@apollo/client";
// // import { ApolloClient } from "apollo-boost";
// // import { InMemoryCache } from 'apollo-cache-inmemory'

 // import { setContext } from 'apollo-link-context'
// import Cookies from "js-cookie";


const httpLink = (0,apollo_link_http__WEBPACK_IMPORTED_MODULE_1__.createHttpLink)({
  uri: process.env.GQL_URL
});
const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloClient({
  link: httpLink,
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.InMemoryCache()
});
/* harmony default export */ __webpack_exports__["Z"] = (client); // const httpLink = createHttpLink({ uri: 'http://localhost:1337/graphql', // my wordpress graphql 
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

/***/ })

};
;