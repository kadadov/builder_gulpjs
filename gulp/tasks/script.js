const { src, dest } = require('gulp')
const sourcemaps    = require('gulp-sourcemaps');
const gulpIf        = require('gulp-if')
const uglify        = require('gulp-uglify'); 
const concat        = require('gulp-concat');
const config        = require('../config')

const script = () => {
  return src( config.src.script )
    .pipe( gulpIf( config.development, sourcemaps.init() ) )
    .pipe( concat('index.js') )
    .pipe( gulpIf( config.production, uglify() ) )
    .pipe( gulpIf( config.development, sourcemaps.write('.') ) )
    .pipe( dest( config.dest.script ) )
}

module.exports = script
