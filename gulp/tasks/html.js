const { src, dest } = require('gulp')
const config        = require('../config')

const html = () => {
  return src(config.src.html)
   .pipe( dest( config.dest.html ) )
}

module.exports = html
