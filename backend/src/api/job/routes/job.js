'use strict';

/**
 * job router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::job.job', {
  routes: [
    {
      method: 'GET',
      path: '/jobs/slug/:slug',
      handler: 'job.findOne',
      config: {
        findOne: {
        auth: false,
        policies:[]
      }
      },
    },
  ],
}); 

// module.exports = createCoreRouter('api::job.job', {
//   config: {
//     find: {
//       auth: false
//     },
//     findOne:{
//       auth: false
      
//     }
//   }
// }); 

