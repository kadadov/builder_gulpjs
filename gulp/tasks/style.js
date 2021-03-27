const { src, dest } = require('gulp')
const config        = require('../config')
const gulpIf        = require('gulp-if')
const sourcemaps    = require('gulp-sourcemaps')
const sass          = require('gulp-sass')
sass.compiler       = require('node-sass')
const postcss       = require('gulp-postcss')
const autoprefixer  = require('autoprefixer')
const csso          = require('postcss-csso')
const mqpacker      = require('css-mqpacker')

const plugins = [
  autoprefixer(),
  mqpacker({
    sort: sortMediaQueries
  }),
]

if (config.production) {
  plugins.push(csso)
}

const style = () => {
  return src(config.src.style)
    .pipe( gulpIf( config.development, sourcemaps.init() ) )
    .pipe(
      sass({
        outputStyle: 'expanded' // nested, expanded, compact, compressed
      }).on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe( gulpIf( config.development, sourcemaps.write('.') ) )
    .pipe( dest( config.dest.style ) )
}

function isMax(mq) {
  return /max-width/.test(mq)
}

function isMin(mq) {
  return /min-width/.test(mq)
}

function sortMediaQueries(a, b) {
  A = a.replace(/\D/g, '');
  B = b.replace(/\D/g, '');

  if (isMax(a) && isMax(b)) {
    return B - A;
  } else if (isMin(a) && isMin(b)) {
    return A - B;
  } else if (isMax(a) && isMin(b)) {
    return 1;
  } else if (isMin(a) && isMax(b)) {
    return -1;
  }

  return 1;
}

module.exports = style
