'use strict';

const postBySlug = require('./postBySlug');
/**
 * クエリのカスタマイズ
 * @see https://github.com/strapi/strapi/blob/master/packages/plugins/users-permissions/server/graphql/queries/index.js
 */
module.exports = ({ strapi, nexus }) => {
  return nexus.extendType({
    type: 'Query',

    definition(t) {
      t.field('postBySlug', postBySlug({ strapi, nexus }));
    },
  });
};
