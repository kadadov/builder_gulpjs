const { src, dest, series, watch } = require('gulp')
const browserSync                  = require('browser-sync').create();
const config                       = require('../config')
const html                         = require('./html')
const style                        = require('./style')
const image                        = require('./image')
const script                       = require('./script')

function server(cb) {
  browserSync.init({
    open: false,
    port: 8080,
    ui: {
      port: 8081
    },
    server: {
      baseDir: 'dist'
    }
  })

  watch([
    config.dest.html + '/*.html',
    config.dest.style + '/*.css',
    config.dest.image + '/*.{jpg, png, svg}',
    config.dest.script + '/*.js',
  ]).on('change', browserSync.reload)
  // watch(config.dest.html + '/*.html').on('change', browserSync.reload)
  // watch(config.dest.style + '/*.css').on('change', browserSync.reload)
  // watch(config.dest.image + '/*.{jpg, png, svg}').on('change', browserSync.reload)
  // watch(config.dest.script + '/*.js').on('change', browserSync.reload)

  cb()
}

module.exports = server
