'use strict';
const getQueries = require('./queries');
const getResolversConfig = require('./resolvers-configs');

/**
 * GraphQLのカスタマイズ
 * @see https://github.com/strapi/strapi/blob/master/packages/plugins/users-permissions/server/graphql/index.js
 */
module.exports = ({ strapi }) => {
  const extensionService = strapi.plugin('graphql').service('extension');

  extensionService.use(({ nexus }) => {
    const queries = getQueries({ strapi, nexus });
    const resolversConfig = getResolversConfig({ strapi });

    return { types: [queries], resolversConfig };
  });
};
