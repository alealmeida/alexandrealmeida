(function() {
var exports = {};
exports.id = 560;
exports.ids = [560];
exports.modules = {

/***/ 775:
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

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "react-markdown"
var external_react_markdown_namespaceObject = require("react-markdown");;
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_namespaceObject);
// EXTERNAL MODULE: ./pages/jobs/slug.module.sass
var slug_module = __webpack_require__(2619);
var slug_module_default = /*#__PURE__*/__webpack_require__.n(slug_module);
;// CONCATENATED MODULE: external "styled-components"
var external_styled_components_namespaceObject = require("styled-components");;
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./configs.json
var configs_namespaceObject = JSON.parse('{"M":"http://localhost:1337"}');
;// CONCATENATED MODULE: ./lib/imageUrl.js


const urlBuilder = src => {
  // const fullUrl = configs.STRAPI_URL + src
  return `${configs_namespaceObject.M}${src}`;
};

/* harmony default export */ var imageUrl = (urlBuilder);
// EXTERNAL MODULE: ./lib/apollo.js
var apollo = __webpack_require__(5923);
// EXTERNAL MODULE: ./graphql/jobsc.query.ts
var jobsc_query = __webpack_require__(7509);
;// CONCATENATED MODULE: ./pages/jobs/[slug].tsx









 // GET STATICS

const getStaticPaths = async () => {
  const jobsSlugs = await apollo/* default.query */.Z.query({
    query: jobsc_query/* GetAllJobsQuery */.t
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
    query: jobsc_query/* GetJobBySlugQuery */.r,
    variables: {
      slug
    }
  }).then(result => {
    return result.data.postBySlug;
  });
  const infos = data && {
    job: data.infos,
    brand: data.attributes.brand.data.attributes.name,
    product: data.attributes.product.data.attributes.name
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

// FUNCTIONS
const getBackground = (background, brand) => {
  const low_brand = brand.toLowerCase().split(" ")[0];
  return [background || (brand === low_brand ? `theme-${low_brand}-primary` : null)];
}; // STYLED


const Hero = (external_styled_components_default()).header`
		width: 100vw;
		height: 100%;
		display:flex;
		background: var(--color-${({
  brand,
  color
}) => getBackground(color, brand)}-dark);
		justify-content:center;
		`; // PAGE

const Page = ({
  data,
  infos,
  content,
  low_brand
}) => {
  if (!data || data === null) return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: "Experi\xEAncia n\xE3o encontrada"
  });
  const {
    main_content,
    page_content,
    hero
  } = content;
  const hero_attr = hero.data.attributes;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: low_brand,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      className: (slug_module_default()).job_page,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        className: (slug_module_default()).header_content,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Hero, {
          brand: low_brand,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: imageUrl(hero_attr.url),
            alt: hero_attr.name,
            objectFit: "cover",
            width: hero_attr.width,
            height: hero_attr.height
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
              children: [infos.brand, " / ", infos.product]
            }), /*#__PURE__*/jsx_runtime_.jsx("aside", {
              children: infos.job.year
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (slug_module_default()).content,
            children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
              children: infos.job.title
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: infos.job.description
            })]
          })]
        })]
      }), main_content && /*#__PURE__*/jsx_runtime_.jsx("section", {
        className: (slug_module_default()).main_content,
        children: main_content.map(main => [/*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (slug_module_default()).content,
            children: /*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
              className: (slug_module_default()).contentMarkdown,
              children: main.content
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (slug_module_default()).content,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (slug_module_default()).bg_content,
              style: {
                "background": `var(${main.main_media.bg_color})`,
                "padding": "4em 0"
              },
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                src: imageUrl(main.main_media.media.data.attributes.url),
                objectFit: "contain",
                width: main.main_media.media.data.attributes.width,
                height: main.main_media.media.data.attributes.height
              })
            })
          })]
        })])
      }, 2), page_content && /*#__PURE__*/jsx_runtime_.jsx("section", {
        className: (slug_module_default()).page_content,
        children: page_content.map(page_content => [/*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (slug_module_default()).content,
            children: /*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
              className: (slug_module_default()).contentMarkdown,
              children: page_content.content
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (slug_module_default()).content,
            children: page_content.content_media.map((args, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (slug_module_default()).bg_content,
              style: {
                "background": `var(${args.bg_color})`,
                "padding": "4em 0"
              },
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
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

/***/ 2619:
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [999,675,923,509], function() { return __webpack_exec__(775); });
module.exports = __webpack_exports__;

})();