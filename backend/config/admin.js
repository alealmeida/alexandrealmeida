module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '369e659093fbf2cda9ec32ac2a4b95e9'),
  },
});
