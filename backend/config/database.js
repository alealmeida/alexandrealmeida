module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'ale_db'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'postgres'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'db-postgresql-nyc3-77026-do-user-10543460-0.b.db.ondigitalocean.com'),
//       port: env.int('DATABASE_PORT', 25060),
//       database: env('DATABASE_NAME', 'defaultdb'),
//       user: env('DATABASE_USERNAME', 'doadmin'),
//       password: env('DATABASE_PASSWORD', 'o27SjujWfibd6mmp'),
//       ssl: env.bool('DATABASE_SSL', true),
//     },
//   },
// });
