const n_routes = require('next-routes')
// import slug from './pages/slugs/sluglist'
const routes = module.exports = n_routes()
routes.add('about')
// routes.add('jobs/2', `/jobs/2`)

routes.add('jobs/:slug', `/jobs/2`)