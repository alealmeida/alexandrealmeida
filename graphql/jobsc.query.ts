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

export {
  GetAllJobsQuery,
  GetJobBySlugQuery
};