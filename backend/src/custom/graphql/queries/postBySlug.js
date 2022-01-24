'use strict';

/**
 * slugでpostを取得
 * @see https://github.com/strapi/strapi/blob/master/packages/plugins/users-permissions/server/graphql/queries/me.js
 * @see https://github.com/strapi/strapi/issues/11745
 */
module.exports = ({ strapi, nexus }) => {
  const { transformArgs } = strapi.plugin('graphql').service('builders').utils;
  const { toEntityResponse } = strapi
    .plugin('graphql')
    .service('format').returnTypes;
  const uid = 'api::job.job';
  return {
    type: 'JobEntityResponse',
    args: { slug: nexus.stringArg() },

    async resolve(parent, args, ctx) {
      const transformedArgs = transformArgs(args, {
        contentType: strapi.contentTypes[uid],
        usePagination: false,
      });
      if (!transformedArgs.slug) {
        throw new Error('スラッグを指定してください。');
      }

      const nodes = await strapi.entityService.findMany(uid, {
        filters: transformedArgs,
      });

      if (nodes.length > 0) {
        /**
         * 適切な形に変換する
         * @see https://github.com/strapi/strapi/issues/11745#issuecomment-997989294
         */
        return toEntityResponse(nodes[0], { transformArgs, uid });
      } else {
        throw new Error(ctx.koaContext.response.message);
      }
    },
  };
};