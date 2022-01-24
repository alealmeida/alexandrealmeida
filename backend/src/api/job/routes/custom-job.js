module.exports = {
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
};