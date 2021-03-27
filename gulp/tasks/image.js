const { src, dest } = require('gulp')
const config               = require('../config')
const imagemin             = require('gulp-imagemin')

const image = () => {
  return src( config.src.image )
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe( dest( config.dest.image ) )
}

module.exports = image
