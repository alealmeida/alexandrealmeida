
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./next-s3-upload.cjs.production.min.js')
} else {
  module.exports = require('./next-s3-upload.cjs.development.js')
}
