/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 20788:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _slug_; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-markdown/src/react-markdown.js
var react_markdown = __webpack_require__(38456);
var react_markdown_default = /*#__PURE__*/__webpack_require__.n(react_markdown);
// EXTERNAL MODULE: ./pages/jobs/slug.module.sass
var slug_module = __webpack_require__(92619);
var slug_module_default = /*#__PURE__*/__webpack_require__.n(slug_module);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(60027);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
;// CONCATENATED MODULE: ./configs.json
var configs_namespaceObject = {};
;// CONCATENATED MODULE: ./lib/imageUrl.js


const urlBuilder = src => {
  // const fullUrl = configs.STRAPI_URL + src
  return `${src}`;
};

/* harmony default export */ var imageUrl = (urlBuilder);
// EXTERNAL MODULE: ./lib/apollo.js
var apollo = __webpack_require__(95923);
// EXTERNAL MODULE: ./node_modules/graphql-tag/main.js
var main = __webpack_require__(69901);
var main_default = /*#__PURE__*/__webpack_require__.n(main);
;// CONCATENATED MODULE: ./graphql/jobsc.query.ts

const GetAllJobsQuery = (main_default())`
query Jobs {
  jobs {
    data {
      id:attributes{slug}
      attributes {
        slug
        title
        product {
          data {
            attributes {
              name
              brand {
                data {
                  attributes {
                    name
                  }
                }
              }
            }
          }
        }
      }
    } 
  }
}
`;
const GetJobBySlugQuery = (main_default())`
query Job($slug: String!) {
  postBySlug(slug: $slug) {
    data {
      attributes {
        bg_color
        slug
        product {
          data{attributes{name}}
        }
        brand {
          data {attributes {name}}
        }
      }
      infos: attributes {
        title
        short_description
        year
        description
        main_content {
          title
          content
          main_media {
            bg_color
            media {
              data {
                attributes {
                  url
                  width
                  height
                }
              }
            }
          }
        }
        page_content {
          title
          content
          content_media {
            bg_color
            media {
              data {
                attributes {
                  url
                  width
                  height
                }
              }
            }
          }
        }
        hero: hero_for_page {
          data {
            attributes {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
}
`;

;// CONCATENATED MODULE: ./pages/jobs/[slug].tsx









 // GET STATICS

const getStaticPaths = async () => {
  const jobsSlugs = await apollo/* default.query */.Z.query({
    query: GetAllJobsQuery
  }).then(result => result.data.jobs.data);
  if (!jobsSlugs.data) return {
    paths: [],
    fallback: true
  };
  const paths = jobsSlugs.data.jobs.data.map(jobs => ({
    params: {
      slug: jobs.id.slug
    }
  }));
  return {
    paths,
    fallback: false
  };
};
const getStaticProps = async ({
  params
}) => {
  const {
    slug
  } = params;
  const {
    data
  } = await apollo/* default.query */.Z.query({
    query: GetJobBySlugQuery,
    variables: {
      slug
    }
  }).then(result => {
    return result.data.postBySlug;
  });
  const infos = data && {
    job: data.infos,
    brand: data.attributes.brand.data.attributes.name,
    product: data.attributes.product.data.attributes.name,
    bg_color: data.attributes.bg_color
  };
  const content = data && {
    hero: data.infos.hero,
    main_content: data.infos.main_content,
    page_content: data.infos.page_content
  };
  const low_brand = infos.brand.toLowerCase().split(" ")[0];
  return {
    props: {
      data,
      slug,
      infos,
      content,
      low_brand
    }
  }; // return { props: { data, slug} };
}; // PROPS

// STYLED
const Highlights = styled_components_cjs/* default.header */.ZP.header`
	width: 100vw;
	height: 100%;
	display:flex;
	background-color:  ${({
  bg
}) => bg ? `var(${bg})` : 'transparent'};width: 100vw;
	height: 100%;
	display:flex;
	transition: all 0.7s ease-out;
	justify-content: center;
	}
	`; // PAGE

const Page = ({
  data,
  infos,
  content,
  low_brand
}) => {
  if (!data || data === null) return /*#__PURE__*/jsx_runtime.jsx("div", {
    children: "Carregando"
  });
  const {
    main_content,
    page_content,
    hero
  } = content;
  const hero_attr = hero.data.attributes;
  const bg_color = infos.bg_color;
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    id: low_brand,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
      className: (slug_module_default()).job_page,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
        className: (slug_module_default()).header_content,
        children: [/*#__PURE__*/jsx_runtime.jsx(Highlights, {
          bg: bg_color,
          children: /*#__PURE__*/jsx_runtime.jsx(next_image.default, {
            src: imageUrl(hero_attr.url),
            alt: hero_attr.name,
            objectFit: "cover",
            width: hero_attr.width,
            height: hero_attr.height
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("article", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("header", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("h2", {
              children: [infos.brand, " / ", infos.product]
            }), /*#__PURE__*/jsx_runtime.jsx("aside", {
              children: infos.job.year
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: (slug_module_default()).content,
            children: [/*#__PURE__*/jsx_runtime.jsx("h1", {
              children: infos.job.title
            }), /*#__PURE__*/jsx_runtime.jsx("p", {
              children: infos.job.description
            })]
          })]
        })]
      }), main_content && /*#__PURE__*/jsx_runtime.jsx("section", {
        className: (slug_module_default()).main_content,
        children: main_content.map(main => [/*#__PURE__*/(0,jsx_runtime.jsxs)("article", {
          children: [/*#__PURE__*/jsx_runtime.jsx("div", {
            className: (slug_module_default()).content,
            children: /*#__PURE__*/jsx_runtime.jsx((react_markdown_default()), {
              className: (slug_module_default()).contentMarkdown,
              children: main.content
            })
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: (slug_module_default()).content,
            children: /*#__PURE__*/jsx_runtime.jsx("div", {
              className: (slug_module_default()).bg_content,
              style: {
                "background": `var(${main.main_media.bg_color})`,
                "padding": "4em 0"
              },
              children: /*#__PURE__*/jsx_runtime.jsx(next_image.default, {
                src: imageUrl(main.main_media.media.data.attributes.url),
                objectFit: "contain",
                width: main.main_media.media.data.attributes.width,
                height: main.main_media.media.data.attributes.height
              })
            })
          })]
        })])
      }, 2), page_content && /*#__PURE__*/jsx_runtime.jsx("section", {
        className: (slug_module_default()).page_content,
        children: page_content.map(page_content => [/*#__PURE__*/(0,jsx_runtime.jsxs)("article", {
          children: [/*#__PURE__*/jsx_runtime.jsx("div", {
            className: (slug_module_default()).content,
            children: /*#__PURE__*/jsx_runtime.jsx((react_markdown_default()), {
              className: (slug_module_default()).contentMarkdown,
              children: page_content.content
            })
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: (slug_module_default()).content,
            children: page_content.content_media.map((args, i) => /*#__PURE__*/jsx_runtime.jsx("div", {
              className: (slug_module_default()).bg_content,
              style: {
                "background": `var(${args.bg_color})`,
                "padding": "4em 0"
              },
              children: /*#__PURE__*/jsx_runtime.jsx(next_image.default, {
                src: imageUrl(args.media.data.attributes.url),
                objectFit: "contain",
                width: args.media.data.attributes.width,
                height: args.media.data.attributes.height
              })
            }, i))
          })]
        })])
      }, 3)]
    }, 1)
  });
};

/* harmony default export */ var _slug_ = (Page);

/***/ }),

/***/ 42533:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; },
/* harmony export */   "unstable_getStaticParams": function() { return /* binding */ unstable_getStaticParams; },
/* harmony export */   "unstable_getStaticProps": function() { return /* binding */ unstable_getStaticProps; },
/* harmony export */   "unstable_getStaticPaths": function() { return /* binding */ unstable_getStaticPaths; },
/* harmony export */   "unstable_getServerProps": function() { return /* binding */ unstable_getServerProps; },
/* harmony export */   "config": function() { return /* binding */ config; },
/* harmony export */   "_app": function() { return /* binding */ _app; },
/* harmony export */   "renderReqToHTML": function() { return /* binding */ renderReqToHTML; },
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3660);
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35706);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32738);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19392);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([{"path":".env.production","contents":"GQL_URL =  'https://shielded-garden-57779.herokuapp.com/graphql'"}])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(6021)

      const appMod = __webpack_require__(97895)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(20788)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ __webpack_exports__["default"] = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(33020),
        notFoundModule: __webpack_require__(97348),
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/jobs/[slug]",
        buildId: "R2Te_IBd94X0IiWbkvjgS",
        escapedBuildId: "R2Te_IBd94X0IiWbkvjgS",
        basePath: "",
        pageIsDynamic: true,
        encodedPreviewProps: {previewModeId:"9770a043518957a9da3565b178f7dcb2",previewModeSigningKey:"42a3cf8c7052ef779fbd694ef126f9a5852b1614d2e79e08c43a286087c698bf",previewModeEncryptionKey:"b0b86381a0b69d8f54bbe9686e8adeb3d1343a7fb7ecc0f5a7a421a91cc3b6e9"}
      })
      
    

/***/ }),

/***/ 92619:
/***/ (function(module) {

// Exports
module.exports = {
	"job_page": "slug_job_page__3doBF",
	"content": "slug_content__UZL4H",
	"bg_content": "slug_bg_content__1IzHJ",
	"main_content": "slug_main_content__9OHEi",
	"page_content": "slug_page_content__58LVE",
	"header_content": "slug_header_content__1biUs",
	"right": "slug_right__375KP"
};


/***/ }),

/***/ 64293:
/***/ (function(module) {

"use strict";
module.exports = require("buffer");;

/***/ }),

/***/ 45532:
/***/ (function(module) {

"use strict";
module.exports = require("critters");;

/***/ }),

/***/ 76417:
/***/ (function(module) {

"use strict";
module.exports = require("crypto");;

/***/ }),

/***/ 28614:
/***/ (function(module) {

"use strict";
module.exports = require("events");;

/***/ }),

/***/ 35747:
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 98605:
/***/ (function(module) {

"use strict";
module.exports = require("http");;

/***/ }),

/***/ 57211:
/***/ (function(module) {

"use strict";
module.exports = require("https");;

/***/ }),

/***/ 33700:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");;

/***/ }),

/***/ 12087:
/***/ (function(module) {

"use strict";
module.exports = require("os");;

/***/ }),

/***/ 85622:
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 94213:
/***/ (function(module) {

"use strict";
module.exports = require("punycode");;

/***/ }),

/***/ 71191:
/***/ (function(module) {

"use strict";
module.exports = require("querystring");;

/***/ }),

/***/ 92413:
/***/ (function(module) {

"use strict";
module.exports = require("stream");;

/***/ }),

/***/ 24304:
/***/ (function(module) {

"use strict";
module.exports = require("string_decoder");;

/***/ }),

/***/ 78835:
/***/ (function(module) {

"use strict";
module.exports = require("url");;

/***/ }),

/***/ 31669:
/***/ (function(module) {

"use strict";
module.exports = require("util");;

/***/ }),

/***/ 78761:
/***/ (function(module) {

"use strict";
module.exports = require("zlib");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = function() {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [721,901,727,456,289], function() { return __webpack_require__(42533); })
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [{"url":"https://use.typekit.net/vfw0siz.css","content":"@import url(\"https://p.typekit.net/p.css?s=1&k=vfw0siz&ht=tk&f=12813.12814.12815.12816.12817.35600.35601.35606.35607.39492.39494.39495.39496.39498.39500.39501.39502.39504.39505.39508.39509.39530.39532.39534.39536.39538.39539.39541.39543.40990.40992.40993.40994.40996.40998.40999&a=5642142&app=typekit&e=css\");@font-face{font-family:\"corporate-s\";src:url(\"https://use.typekit.net/af/48c4f7/0000000000000000000178cf/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/48c4f7/0000000000000000000178cf/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/48c4f7/0000000000000000000178cf/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3\") format(\"opentype\");font-display:auto;font-style:normal;font-weight:300}@font-face{font-family:\"corporate-s\";src:url(\"https://use.typekit.net/af/9b7203/0000000000000000000178d1/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/9b7203/0000000000000000000178d1/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/9b7203/0000000000000000000178d1/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"opentype\");font-display:auto;font-style:normal;font-weight:400}@font-face{font-family:\"corporate-s\";src:url(\"https://use.typekit.net/af/421540/0000000000000000000178d5/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/421540/0000000000000000000178d5/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/421540/0000000000000000000178d5/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3\") format(\"opentype\");font-display:auto;font-style:normal;font-weight:600}@font-face{font-family:\"corporate-s\";src:url(\"https://use.typekit.net/af/50bd6b/0000000000000000000178d7/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/50bd6b/0000000000000000000178d7/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/50bd6b/0000000000000000000178d7/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");font-display:auto;font-style:normal;font-weight:700}@font-face{font-family:\"corporate-s\";src:url(\"https://use.typekit.net/af/f70777/0000000000000000000178d3/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/f70777/0000000000000000000178d3/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/f70777/0000000000000000000178d3/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3\") format(\"opentype\");font-display:auto;font-style:normal;font-weight:500}@font-face{font-family:\"corporate-s-std-urw\";src:url(\"https://use.typekit.net/af/084cef/00000000000000003b9b058a/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/084cef/00000000000000003b9b058a/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/084cef/00000000000000003b9b058a/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"opentype\");font-display:auto;font-style:normal;font-weight:400}@font-face{font-family:\"corporate-s-std-urw\";src:url(\"https://use.typekit.net/af/67268f/00000000000000003b9b058b/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/67268f/00000000000000003b9b058b/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/67268f/00000000000000003b9b058b/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3\") format(\"opentype\");font-display:auto;font-style:italic;font-weight:400}@font-face{font-family:\"corporate-s-std-urw\";src:url(\"https://use.typekit.net/af/63f7c1/00000000000000003b9b0590/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/63f7c1/00000000000000003b9b0590/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/63f7c1/00000000000000003b9b0590/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");font-display:auto;font-style:normal;font-weight:700}@font-face{font-family:\"corporate-s-std-urw\";src:url(\"https://use.typekit.net/af/086630/00000000000000003b9b0591/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/086630/00000000000000003b9b0591/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/086630/00000000000000003b9b0591/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3\") format(\"opentype\");font-display:auto;font-style:italic;font-weight:700}@font-face{font-family:\"neue-haas-grotesk-display\";src:url(\"https://use.typekit.net/af/afb65e/00000000000000003b9b2044/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/afb65e/00000000000000003b9b2044/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/afb65e/00000000000000003b9b2044/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3\") format(\"opentype\");font-display:auto;font-style:normal;font-weight:300}@font-face{font-family:\"neue-haas-grotesk-display\";src:url(\"https://use.typekit.net/af/9395af/00000000000000003b9b2046/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/9395af/00000000000000003b9b2046/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/9395af/00000000000000003b9b2046/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"opentype\");font-display:auto;font-style:normal;font-weight:400}@font-face{font-family:\"neue-haas-grotesk-display\";src:url(\"https://use.typekit.net/af/032ccd/00000000000000003b9b2047/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/032ccd/00000000000000003b9b2047/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/032ccd/00000000000000003b9b2047/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3\") format(\"opentype\");font-display:auto;font-style:italic;font-weight:400}@font-face{font-family:\"neue-haas-grotesk-display\";src:url(\"https://use.typekit.net/af/28f000/00000000000000003b9b2048/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/28f000/00000000000000003b9b2048/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/28f000/00000000000000003b9b2048/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3\") format(\"opentype\");font-display:auto;font-style:normal;font-weight:500}@font-face{font-family:\"neue-haas-grotesk-display\";src:url(\"https://use.typekit.net/af/8a200c/00000000000000003b9b204a/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/8a200c/00000000000000003b9b204a/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/8a200c/00000000000000003b9b204a/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3\") format(\"opentype\");font-display:auto;font-style:normal;font-weight:600}@font-face{font-family:\"neue-haas-grotesk-display\";src:url(\"https://use.typekit.net/af/d562ce/00000000000000003b9b204c/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/d562ce/00000000000000003b9b204c/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/d562ce/00000000000000003b9b204c/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");font-display:auto;font-style:normal;font-weight:700}@font-face{font-family:\"neue-haas-grotesk-display\";src:url(\"https://use.typekit.net/af/661dc5/00000000000000003b9b204d/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/661dc5/00000000000000003b9b204d/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/661dc5/00000000000000003b9b204d/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3\") format(\"opentype\");font-display:auto;font-style:italic;font-weight:700}@font-face{font-family:\"neue-haas-grotesk-display\";src:url(\"https://use.typekit.net/af/375e66/00000000000000003b9b204e/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/375e66/00000000000000003b9b204e/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/375e66/00000000000000003b9b204e/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3\") format(\"opentype\");font-display:auto;font-style:normal;font-weight:900}@font-face{font-family:\"neue-haas-grotesk-text\";src:url(\"https://use.typekit.net/af/1285d2/00000000000000003b9b2050/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/1285d2/00000000000000003b9b2050/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/1285d2/00000000000000003b9b2050/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"opentype\");font-display:auto;font-style:normal;font-weight:400}@font-face{font-family:\"neue-haas-grotesk-text\";src:url(\"https://use.typekit.net/af/032bac/00000000000000003b9b2051/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/032bac/00000000000000003b9b2051/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/032bac/00000000000000003b9b2051/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3\") format(\"opentype\");font-display:auto;font-style:italic;font-weight:400}@font-face{font-family:\"neue-haas-grotesk-text\";src:url(\"https://use.typekit.net/af/abbb5b/00000000000000003b9b2054/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/abbb5b/00000000000000003b9b2054/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/abbb5b/00000000000000003b9b2054/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");font-display:auto;font-style:normal;font-weight:700}@font-face{font-family:\"neue-haas-grotesk-text\";src:url(\"https://use.typekit.net/af/73eec9/00000000000000003b9b2055/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/73eec9/00000000000000003b9b2055/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/73eec9/00000000000000003b9b2055/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3\") format(\"opentype\");font-display:auto;font-style:italic;font-weight:700}@font-face{font-family:\"neue-kabel\";src:url(\"https://use.typekit.net/af/53f3fe/00000000000000003b9b206a/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/53f3fe/00000000000000003b9b206a/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/53f3fe/00000000000000003b9b206a/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");font-display:auto;font-style:normal;font-weight:700}@font-face{font-family:\"neue-kabel\";src:url(\"https://use.typekit.net/af/37f42c/00000000000000003b9b206c/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/37f42c/00000000000000003b9b206c/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/37f42c/00000000000000003b9b206c/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3\") format(\"opentype\");font-display:auto;font-style:normal;font-weight:500}@font-face{font-family:\"neue-kabel\";src:url(\"https://use.typekit.net/af/0225d5/00000000000000003b9b206e/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n8&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/0225d5/00000000000000003b9b206e/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n8&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/0225d5/00000000000000003b9b206e/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n8&v=3\") format(\"opentype\");font-display:auto;font-style:normal;font-weight:800}@font-face{font-family:\"neue-kabel\";src:url(\"https://use.typekit.net/af/5e2f3b/00000000000000003b9b2070/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n2&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/5e2f3b/00000000000000003b9b2070/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n2&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/5e2f3b/00000000000000003b9b2070/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n2&v=3\") format(\"opentype\");font-display:auto;font-style:normal;font-weight:200}@font-face{font-family:\"neue-kabel\";src:url(\"https://use.typekit.net/af/5bdd1f/00000000000000003b9b2072/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/5bdd1f/00000000000000003b9b2072/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/5bdd1f/00000000000000003b9b2072/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3\") format(\"opentype\");font-display:auto;font-style:italic;font-weight:400}@font-face{font-family:\"neue-kabel\";src:url(\"https://use.typekit.net/af/70cfe2/00000000000000003b9b2073/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/70cfe2/00000000000000003b9b2073/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/70cfe2/00000000000000003b9b2073/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3\") format(\"opentype\");font-display:auto;font-style:normal;font-weight:300}@font-face{font-family:\"neue-kabel\";src:url(\"https://use.typekit.net/af/be03a6/00000000000000003b9b2075/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/be03a6/00000000000000003b9b2075/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/be03a6/00000000000000003b9b2075/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3\") format(\"opentype\");font-display:auto;font-style:normal;font-weight:600}@font-face{font-family:\"neue-kabel\";src:url(\"https://use.typekit.net/af/3f2f95/00000000000000003b9b2077/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/3f2f95/00000000000000003b9b2077/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/3f2f95/00000000000000003b9b2077/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"opentype\");font-display:auto;font-style:normal;font-weight:400}@font-face{font-family:\"cormorant-garamond\";src:url(\"https://use.typekit.net/af/513da6/00000000000000003b9b2910/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/513da6/00000000000000003b9b2910/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/513da6/00000000000000003b9b2910/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3\") format(\"opentype\");font-display:auto;font-style:normal;font-weight:300}@font-face{font-family:\"cormorant-garamond\";src:url(\"https://use.typekit.net/af/eb1aae/00000000000000003b9b2912/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/eb1aae/00000000000000003b9b2912/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/eb1aae/00000000000000003b9b2912/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3\") format(\"opentype\");font-display:auto;font-style:normal;font-weight:400}@font-face{font-family:\"cormorant-garamond\";src:url(\"https://use.typekit.net/af/fa255f/00000000000000003b9b2913/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/fa255f/00000000000000003b9b2913/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/fa255f/00000000000000003b9b2913/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3\") format(\"opentype\");font-display:auto;font-style:italic;font-weight:400}@font-face{font-family:\"cormorant-garamond\";src:url(\"https://use.typekit.net/af/9fe3a2/00000000000000003b9b2914/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/9fe3a2/00000000000000003b9b2914/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/9fe3a2/00000000000000003b9b2914/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3\") format(\"opentype\");font-display:auto;font-style:normal;font-weight:500}@font-face{font-family:\"cormorant-garamond\";src:url(\"https://use.typekit.net/af/ab9b8a/00000000000000003b9b2916/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/ab9b8a/00000000000000003b9b2916/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/ab9b8a/00000000000000003b9b2916/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3\") format(\"opentype\");font-display:auto;font-style:normal;font-weight:600}@font-face{font-family:\"cormorant-garamond\";src:url(\"https://use.typekit.net/af/48a072/00000000000000003b9b2918/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/48a072/00000000000000003b9b2918/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/48a072/00000000000000003b9b2918/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3\") format(\"opentype\");font-display:auto;font-style:normal;font-weight:700}@font-face{font-family:\"cormorant-garamond\";src:url(\"https://use.typekit.net/af/b2f6d4/00000000000000003b9b2919/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3\") format(\"woff2\"),url(\"https://use.typekit.net/af/b2f6d4/00000000000000003b9b2919/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3\") format(\"woff\"),url(\"https://use.typekit.net/af/b2f6d4/00000000000000003b9b2919/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3\") format(\"opentype\");font-display:auto;font-style:italic;font-weight:700}.tk-corporate-s{font-family:\"corporate-s\",sans-serif}.tk-corporate-s-std-urw{font-family:\"corporate-s-std-urw\",sans-serif}.tk-neue-haas-grotesk-display{font-family:\"neue-haas-grotesk-display\",sans-serif}.tk-neue-haas-grotesk-text{font-family:\"neue-haas-grotesk-text\",sans-serif}.tk-neue-kabel{font-family:\"neue-kabel\",sans-serif}.tk-cormorant-garamond{font-family:\"cormorant-garamond\",serif}"}];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);/* webpack/runtime/require chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			560: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = function(chunkId) { return installedChunks[chunkId]; };
/******/ 		
/******/ 		var installChunk = function(chunk) {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = function(chunkId, promises) {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../../chunks/" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	!function() {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			__webpack_require__.e(721);
/******/ 			__webpack_require__.e(901);
/******/ 			__webpack_require__.e(727);
/******/ 			__webpack_require__.e(456);
/******/ 			__webpack_require__.e(289);
/******/ 			return next();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;