const destPath = './dist'

let config = {
  src: {
    root  : 'src',
    html  : 'src/*.html',
    style : 'src/scss/index.scss',
    script: 'src/js/**/*.js',
    image : 'src/img/**/*.{jpg,png,svg}',
  },
  dest: {
    root  : destPath,
    html  : destPath,
    script: destPath + '/js',
    style : destPath + '/css',
    image : destPath + '/img'
  }
}

config.production = process.env.NODE_ENV == 'production'
config.development = process.env.NODE_ENV == 'development'

module.exports = config
