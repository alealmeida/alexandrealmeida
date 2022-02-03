import gql from "graphql-tag";

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
const GetJobBySlugQuery = gql `
query Job($slug: String!) {
  postBySlug(slug: $slug) {
    data {
      attributes {
        title
        short_description
        year
        description
        bg_color
        brand {
          data {
            attributes {
              name
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
        main_content {
          content
          main_media {
            bg_color
            media {
              data {
                attributes {
                  url
                  width
                  height
              		hash
                }
              }
            }
          }
        }
        page_content {
          content
          content_media {
            bg_color
            media {
              data {
                attributes {
                  url
                  width
                  height
              		hash
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
              hash
            }
          }
        }
      }
    }
  }
}
`;

export {
  GetAllJobsQuery,
  GetJobBySlugQuery
};