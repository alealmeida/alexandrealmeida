import gql from "graphql-tag";
import client from '../lib/apollo';
const GetAllJobsQuery = gql `
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
async function GetJobsForHome() {
    return client
        .query(
            {query: gql `
            query JobsHome_V2 {
              jobs(sort: "year:desc") {
                data {
                  id
                  attributes {
                    bg_color
                    short_description
                    title
                    slug
                    brand {
                      data {
                        attributes {
                          name
                        }
                      }
                    }
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
                  }
                }
              }
            }
      `}
        )
        .then((result) => result.data.jobs);
}

// Query + GQL
async function GetAll() {
    return client
        .query(
            {query: gql `
            query JobsHome_V2 {
              jobs( sort: "year:desc") {
                data {
                  id
                  attributes {
                    bg_color
                  }
                }
              }
            }
      `}
        )
        .then((result) => result.data.jobs.data)
        ;
}

// export async function getBySlug(slug) {
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

export {
  GetAll,
  GetJobsForHome
};