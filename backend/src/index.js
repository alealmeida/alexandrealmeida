// 'use strict';

// module.exports = {
//   /**
//    * An asynchronous register function that runs before
//    * your application is initialized.
//    *
//    * This gives you an opportunity to extend code.
//    */
//   register(/*{ strapi }*/) {},

//   /**
//    * An asynchronous bootstrap function that runs before
//    * your application gets started.
//    *
//    * This gives you an opportunity to set up your data model,
//    * run jobs, or perform some special logic.
//    */
//   bootstrap(/*{ strapi }*/) {},
// };
'use strict';

module.exports = {
  register({ strapi }) {
    if (strapi.plugin('graphql')) {
      require('./custom/graphql')({ strapi });
      console.log(`bootstrap: Custom graphql loaded`);
    }
  },
};