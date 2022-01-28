exports.id = 289;
exports.ids = [289];
exports.modules = {

/***/ 32738:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-a54b4f32bdc1ef890ddd.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/ou_PFxXXh-vt1xzivL0Py/_buildManifest.js","static/ou_PFxXXh-vt1xzivL0Py/_ssgManifest.js"],"pages":{"/":["static/chunks/webpack-61095c13c5984b221292.js","static/chunks/framework-0441fae7fd130f37dee1.js","static/chunks/main-3f3aab15adf54228f86a.js","static/chunks/995-767fe5c3edbb10563557.js","static/css/c02dcd439a780b279aa4.css","static/chunks/pages/index-10a863e30ac81cb9fd86.js"],"/404":["static/chunks/webpack-61095c13c5984b221292.js","static/chunks/framework-0441fae7fd130f37dee1.js","static/chunks/main-3f3aab15adf54228f86a.js","static/chunks/pages/404-a5be6aaaa22fd28fbfe8.js"],"/_app":["static/chunks/webpack-61095c13c5984b221292.js","static/chunks/framework-0441fae7fd130f37dee1.js","static/chunks/main-3f3aab15adf54228f86a.js","static/css/13e41f334aed5c23df66.css","static/chunks/pages/_app-44d814177dbc96a9b3c3.js"],"/_error":["static/chunks/webpack-61095c13c5984b221292.js","static/chunks/framework-0441fae7fd130f37dee1.js","static/chunks/main-3f3aab15adf54228f86a.js","static/chunks/pages/_error-9d014bdedb748ff555b4.js"],"/about":["static/chunks/webpack-61095c13c5984b221292.js","static/chunks/framework-0441fae7fd130f37dee1.js","static/chunks/main-3f3aab15adf54228f86a.js","static/chunks/pages/about-d2752ada5227f17aac2d.js"],"/jobs":["static/chunks/webpack-61095c13c5984b221292.js","static/chunks/framework-0441fae7fd130f37dee1.js","static/chunks/main-3f3aab15adf54228f86a.js","static/chunks/549-7b98df54598ef27c4e2c.js","static/css/8fde2a1e4a2a63b63eef.css","static/chunks/pages/jobs-b1484897e691af74dd4c.js"],"/jobs/[slug]":["static/chunks/webpack-61095c13c5984b221292.js","static/chunks/framework-0441fae7fd130f37dee1.js","static/chunks/main-3f3aab15adf54228f86a.js","static/chunks/995-767fe5c3edbb10563557.js","static/chunks/456-90d9223e54bde107e20a.js","static/css/24b073b5750f613a63b3.css","static/chunks/pages/jobs/[slug]-afaa4a8ebd0dbe67bcad.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 19392:
/***/ (function(module) {

"use strict";
module.exports = {};

/***/ }),

/***/ 35706:
/***/ (function(module) {

"use strict";
module.exports = {"Dg":[]};

/***/ }),

/***/ 67379:
/***/ (function(module) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 67379;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 95923:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18079);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18876);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44232);
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

/***/ }),

/***/ 97348:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Custom404; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

// pages/404.js
function Custom404() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
    children: "404 - Page Not Found"
  });
}

/***/ }),

/***/ 97895:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ App; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@apollo/client/main.cjs.js
var main_cjs = __webpack_require__(44232);
// EXTERNAL MODULE: ./lib/apollo.js
var apollo = __webpack_require__(95923);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./components/topbar/topbar.module.sass
var topbar_module = __webpack_require__(30901);
var topbar_module_default = /*#__PURE__*/__webpack_require__.n(topbar_module);
;// CONCATENATED MODULE: ./components/topbar/topbar.tsx





const Topbar = () => {
  return /*#__PURE__*/jsx_runtime.jsx("nav", {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
      className: (topbar_module_default()).nav,
      children: [/*#__PURE__*/jsx_runtime.jsx("li", {
        children: /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime.jsx("a", {
            children: "Ale Almeida"
          })
        })
      }), /*#__PURE__*/jsx_runtime.jsx("li", {
        children: "..."
      }), /*#__PURE__*/jsx_runtime.jsx("li", {
        children: /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
          href: "/about",
          children: /*#__PURE__*/jsx_runtime.jsx("a", {
            children: "Sobre mim"
          })
        })
      })]
    })
  });
};
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
;// CONCATENATED MODULE: ./components/layout/layout.tsx






const Layout = ({
  children,
  title
}) => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("main", {
    className: "layout",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(head.default, {
      children: [/*#__PURE__*/jsx_runtime.jsx("title", {
        children: title
      }), /*#__PURE__*/jsx_runtime.jsx("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/jsx_runtime.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }), /*#__PURE__*/jsx_runtime.jsx("link", {
        rel: "stylesheet",
        href: "https://use.typekit.net/vfw0siz.css"
      })]
    }), /*#__PURE__*/jsx_runtime.jsx(Topbar, {}), children]
  });
};

/* harmony default export */ var layout = (Layout);
;// CONCATENATED MODULE: ./pages/_app.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import App from "next/app";





function App({
  Component,
  pageProps,
  router
}) {
  return /*#__PURE__*/jsx_runtime.jsx(layout, _objectSpread(_objectSpread({}, pageProps), {}, {
    children: /*#__PURE__*/jsx_runtime.jsx(main_cjs.ApolloProvider, {
      client: apollo/* default */.Z,
      children: /*#__PURE__*/jsx_runtime.jsx(Component, _objectSpread({}, pageProps))
    })
  }));
}

/***/ }),

/***/ 6021:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56859);




class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1__.default {
  static async getInitialProps(ctx) {
    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1__.default.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
      lang: "en",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})]
      })]
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ 33020:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);


function Error({
  statusCode
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
    children: statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'
  });
}

Error.getInitialProps = ({
  res,
  err
}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ 30901:
/***/ (function(module) {

// Exports
module.exports = {
	"nav": "topbar_nav__394SB"
};


/***/ }),

/***/ 82308:
/***/ (function(module) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 82308;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 14453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;