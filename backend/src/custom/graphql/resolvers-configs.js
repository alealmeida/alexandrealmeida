'use strict';

/**
 * resolverの設定
 * @see https://github.com/strapi/strapi/blob/master/packages/plugins/users-permissions/server/graphql/resolvers-configs.js
 * @see https://docs.strapi.io/developer-docs/latest/plugins/graphql.html#customization
 */
module.exports = () => {
  const postUID = 'api::job.job';
  return {
    [`Query.postBySlug`]: {
      auth: { scope: [`${postUID}.findOne`] },
    },
  };
};
