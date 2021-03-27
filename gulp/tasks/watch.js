const { watch } = require('gulp')
const config    = require('../config')
const html      = require('./html')
const style     = require('./style')
const image     = require('./image')
const script    = require('./script')

const watching = (cb) => {
  watch(config.src.html, html)
  watch(config.src.style, style)
  watch(config.src.image, image)
  watch(config.src.script, script)

  return cb()
}


module.exports = watching
