// const { createServer } = require('http')
// const { parse } = require('url')
// const next = require('next')

// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// app.prepare().then(() => {
//   createServer((req, res) => {
//     // Be sure to pass `true` as the second argument to `url.parse`.
//     // This tells it to parse the query portion of the URL.
//     const parsedUrl = parse(req.url, true)
//     const { pathname, query } = parsedUrl

//     if (pathname === '/') {
//       app.render(req, res, '/', query)
//     } else {
//       handle(req, res, parsedUrl)
//     }
//   }).listen(8080, (err) => {
//     if (err) throw err
//     console.log('> Ready on http://localhost:3000')
//   })
// })





const express = require('express')
const next = require('next')
const routes = require('./routes')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const handler = routes.getRequestHandler(app)

app.prepare()
.then(() => {
  const server = express()
  server.use(handler)

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})