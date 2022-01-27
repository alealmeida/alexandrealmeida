(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4699:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ imageUrl; }
});

;// CONCATENATED MODULE: ./configs.json
var configs_namespaceObject = JSON.parse('{"M":"http://localhost:1337"}');
;// CONCATENATED MODULE: ./lib/imageUrl.js


const urlBuilder = src => {
  // const fullUrl = configs.STRAPI_URL + src
  return `${configs_namespaceObject.M}${src}`;
};

/* harmony default export */ var imageUrl = (urlBuilder);

/***/ }),

/***/ 2927:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(9875);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);
// EXTERNAL MODULE: ./lib/apollo.js
var apollo = __webpack_require__(5923);
;// CONCATENATED MODULE: ./graphql/jobs.query.ts



async function GetJobsForHome() {
  return apollo/* default.query */.Z.query({
    query: (external_graphql_tag_default())`
            query JobsHome {
              jobs(filters: { Old: { eq: false } }, sort: "year:desc") {
                data {
                  attributes {
                    slug
                    short_description
                    title
                    year
                    bg_color
                    image_home: image_for_home {
                      data {
                        attributes {
                          name
                          url
                          width
                          height
                        }
                      }
                    }
                    product {
                      data {
                        attributes {
                          name
                        }
                      }
                    }
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
      `
  }).then(result => result.data.jobs.data);
} // Query + GQL


async function GetAll() {
  return client.query({
    query: gql`
            query Jobs {
                jobs {
                  data {
                    attributes {
                      slug
                      title
                      product {
                        data {
                          attributes {
                            name
                           
                          }
                        }
                      }
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
      `
  }).then(result => result.data.jobs.data);
} // export async function getBySlug(slug) {
//     return client
//         .query(
//             {query: gql `
//             fragment prod on ProductEntityResponse{data{attributes{name}}}
//             fragment br on BrandEntityResponse{data{attributes{name}}}
//             query Job($slug: String!) {
//               postBySlug(slug: $slug) {
//                 data {
//                   attributes {
//                     slug
//                     product {
//                       ...prod
//                     }
//                     brand {
//                       ...br
//                     }
//                   }
//                   infos: attributes {
//                     title
//                     short_description
//                     year
//                     main_content {
//                       title
//                       content
//                       main_media {
//                         bg_color
//                         media {
//                           data {
//                             attributes {
//                               url
//                               width
//                               height
//                             }
//                           }
//                         }
//                       }
//                     }
//                     page_content {
//                       title
//                       content
//                       content_media {
//                         bg_color
//                         media {
//                           data {
//                             attributes {
//                               url
//                               width
//                               height
//                             }
//                           }
//                         }
//                       }
//                     }
//                     hero: hero_for_page {
//                       data {
//                         attributes {
//                           name
//                           url
//                           width
//                           height
//                         }
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//               `, variables: {
//                     slug
//                 }}
//         )
//         .then((result) => {
//             return result.data.postBySlug.data
//         });
// }



// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/jobshome/jobshome.module.sass
var jobshome_module = __webpack_require__(3268);
var jobshome_module_default = /*#__PURE__*/__webpack_require__.n(jobshome_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/jobshome/jobshome.interface.ts
const styleTheme = {
  avec: {
    'justify-content': 'center'
  },
  credicard: {
    'justify-content': 'center'
  },
  mars: {
    'justify-content': 'center'
  },
  natura: {
    'justify-content': 'center'
  },
  veloe: {
    'justify-content': 'center'
  }
};
// EXTERNAL MODULE: ./lib/imageUrl.js + 1 modules
var imageUrl = __webpack_require__(4699);
;// CONCATENATED MODULE: ./components/jobshome/jobshome.tsx










const HighlightsJobs = ({
  jobs
}) => {
  const j = jobs.attributes;
  const year = j.year;
  const title = j.title;
  const brand = jobs.attributes.brand.data.attributes.name;
  const product = j.product.data.attributes.name;
  const description = j.short_description;
  const low_brand = brand.toLowerCase().split(" ")[0];
  const bg_color = j.bg_color;
  const image = j.image_home.data.attributes;
  const image_url = image.url;
  const Highlights = (external_styled_components_default()).header`
	background: var(${bg_color});
	${({
    brand
  }) => styleTheme[brand]};
	`;
  console.log(brand);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
    className: (jobshome_module_default()).card,
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/jobs/[slug]",
      as: `/jobs/${j.slug}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx(Highlights, {
          brand: low_brand,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: (0,imageUrl/* default */.Z)(image_url),
            alt: image,
            width: image.width,
            height: image.height
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("label", {
      children: `${brand} • ${title}`
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/jobs/[slug]",
      as: `/jobs/${j.slug}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: `${description}`
        })
      })
    })]
  });
};

/* harmony default export */ var jobshome = (HighlightsJobs);
// EXTERNAL MODULE: ./styles/main.module.sass
var main_module = __webpack_require__(6679);
var main_module_default = /*#__PURE__*/__webpack_require__.n(main_module);
;// CONCATENATED MODULE: ./pages/index.tsx



// import {getJobsForHome,} from "../graphql/jobs.query";



const Home = ({
  jobs
}) => {
  return [/*#__PURE__*/jsx_runtime_.jsx("section", {
    className: (main_module_default()).intro,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: "Alexandre Almeida"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
        children: ["Product Designer na", /*#__PURE__*/(0,jsx_runtime_.jsxs)("i", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("s", {
            children: " @Avec"
          }), "  @Hyperlocal"]
        }), ". L\xE1 crio novos produtos e experi\xEAncias digitais que impactam na vida das pesssoas."]
      })]
    })
  }), /*#__PURE__*/jsx_runtime_.jsx("section", {
    children: jobs.map((j, i) => /*#__PURE__*/jsx_runtime_.jsx(jobshome, {
      jobs: j
    }, i))
  })];
};

const getServerSideProps = async context => {
  const jobs = await GetJobsForHome();
  return {
    props: {
      jobs: jobs
    }
  };
}; // export const getStaticPaths: GetStaticPaths = async () => {
// 	const jobsSlugs = await client.query({ query: GetAllJobsQuery })
// 		.then((result) => result.data.jobs.data);
// 	if (!jobsSlugs.data) return { paths: [], fallback: true };
// 	const paths = jobsSlugs.data.jobs.data.map((jobs) => ({
// 		params: { slug: jobs.id.slug },
// 	}));
// 	return { paths, fallback: false }
// }
// export const getStaticProps: GetStaticProps = async () => {
//     const jobs = await GetJobsForHome();
//     return {
//         props: {
//             jobs: jobs
//         }
//     };
// }

/* harmony default export */ var pages = (Home);

/***/ }),

/***/ 3268:
/***/ (function(module) {

// Exports
module.exports = {
	"card": "jobshome_card__1VYFd",
	"right": "jobshome_right__1NFeP"
};


/***/ }),

/***/ 6679:
/***/ (function(module) {

// Exports
module.exports = {
	"intro": "main_intro__2qfU1"
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

/***/ 9875:
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ 1071:
/***/ (function(module) {

"use strict";
module.exports = require("isomorphic-unfetch");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

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

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

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

/***/ 9914:
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

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
var __webpack_exports__ = __webpack_require__.X(0, [999,664,675,923], function() { return __webpack_exec__(2927); });
module.exports = __webpack_exports__;

})();