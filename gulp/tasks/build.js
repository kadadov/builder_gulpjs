const { parallel } = require('gulp')
const html         = require('./html')
const style        = require('./style')
const script       = require('./script')
const image        = require('./image')

module.exports = parallel(html, style, script, image)
