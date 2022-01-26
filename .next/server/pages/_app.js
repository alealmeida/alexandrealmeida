(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8095:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ App; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: ./lib/apollo.js
var apollo = __webpack_require__(5923);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/topbar/topbar.module.sass
var topbar_module = __webpack_require__(901);
var topbar_module_default = /*#__PURE__*/__webpack_require__.n(topbar_module);
;// CONCATENATED MODULE: ./components/topbar/topbar.tsx





const Topbar = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: (topbar_module_default()).nav,
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Ale Almeida"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: "..."
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/about",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Sobre mim"
          })
        })
      })]
    })
  });
};
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/layout/layout.tsx






const Layout = ({
  children,
  title
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
    className: "layout",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "stylesheet",
        href: "https://use.typekit.net/vfw0siz.css"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Topbar, {}), children]
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
  return /*#__PURE__*/jsx_runtime_.jsx(layout, _objectSpread(_objectSpread({}, pageProps), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx(client_.ApolloProvider, {
      client: apollo/* default */.Z,
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    })
  }));
}

/***/ }),

/***/ 901:
/***/ (function(module) {

// Exports
module.exports = {
	"nav": "topbar_nav__394SB"
};


/***/ }),

/***/ 8074:
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ 8701:
/***/ (function(module) {

"use strict";
module.exports = require("apollo-link-http");;

/***/ }),

/***/ 1071:
/***/ (function(module) {

"use strict";
module.exports = require("isomorphic-unfetch");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [999,664,923], function() { return __webpack_exec__(8095); });
module.exports = __webpack_exports__;

})();