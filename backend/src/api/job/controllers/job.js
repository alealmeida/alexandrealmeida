'use strict';

// /**
//  *  job controller
//  */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::job.job',  {

//     async findOne(ctx) {
//         const { slug } = ctx.params;
//         // const { query } = ctx;
    
//         // const entity = await strapi.service.job.findOne({slug});
//         const entity = await strapi.service('api::job.job').findOne({slug});
//         const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
//         return this.transformResponse(sanitizedEntity);
//       }
//     });
// const { createCoreController } = require('@strapi/strapi').factories;


// async findOne(ctx) {
//     const { slug } = ctx.params;
//     const { query } = ctx;

//     const entity = await strapi.service('api::job.job').findOne(slug, query);
//     const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

//     return this.transformResponse(sanitizedEntity);
//   }
// }));


// async findOne(ctx) {
//     const { slug } = ctx.params;
//     // const { query } = ctx;

//     const entity = await strapi.service.job.findOne({slug});
//     // const sanitizedEntity = await this.sanitizeOutput(entity);

//     return sanitizedEntity(entity, { model: strapi.models.job });
//   }
// };


const { sanitizeEntity } = require('strapi-utils');
module.exports = createCoreController('api::job.job', ({ strapi }) =>  ({
  
//     // Method 3: Replacing a core action
//     async findOne(ctx) {



//     const { slug } = ctx.params;
//     const { query } = ctx;

//     const entity = await strapi.services.job.findOne( slug, query);
//     //   const { slug } = ctx.params;
  
//     //   const entity = await strapi.service('api::job.job').findOne({slug});
//     //   const entity = await strapi.service.job.findOne({slug})
//       
  
//       return this.transformResponse(sanitizedEntity);
//     }
//   });



// module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findSlug(ctx) {
    const { slug } = ctx.params;

    // const { query } = ctx;
    // const entity = await strapi.services.job.findOne({slug} );
    const entity = await strapi.service('api::job.job').findOne( {slug});
    // return sanitizeEntity(entity, { model: strapi.models.job });

    // const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    // return this.transformResponse(sanitizedEntity);
    return sanitizedEntity(entity, { model: strapi.models.job });
  },
}));