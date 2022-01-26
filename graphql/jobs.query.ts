import gql from "graphql-tag";
import client from '../lib/apollo';

export async function getJobsForHome() {
    return client
        .query(
            {query: gql `
            query JobsHome {
              jobs(filters: { Old: { eq: false } }, sort: "year:desc") {
                data {
                  infos: attributes {
                    short_description
                    slug
                    title
                    year
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
                  }
                }
              }
            }
      `}
        )
        .then((result) => result.data.jobs.data);
}

// Query + GQL
export async function getAll() {
    return client
        .query(
            {query: gql `
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
      `}
        )
        .then((result) => result.data.jobs.data)
        ;
}

export async function getBySlug(slug) {
    return client
        .query(
            {query: gql `

            fragment prod on ProductEntityResponse{data{attributes{name}}}
            fragment br on BrandEntityResponse{data{attributes{name}}}
            query Job($slug: String!) {
              postBySlug(slug: $slug) {
                data {
                  attributes {
                    slug
                    product {
                      ...prod
                    }
                    brand {
                      ...br
                    }
                  }
                  infos: attributes {
                    title
                    short_description
                    year
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
              `, variables: {
                    slug
                }}
        )
        .then((result) => {
            return result.data.postBySlug.data
        });
}