exports.id = 509;
exports.ids = [509];
exports.modules = {

/***/ 7509:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": function() { return /* binding */ GetAllJobsQuery; },
/* harmony export */   "r": function() { return /* binding */ GetJobBySlugQuery; }
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9875);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GetAllJobsQuery = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
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
const GetJobBySlugQuery = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
query Job($slug: String!) {
  postBySlug(slug: $slug) {
    data {
      attributes {
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


/***/ })

};
;