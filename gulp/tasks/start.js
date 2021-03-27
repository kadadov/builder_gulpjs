const { series } = require('gulp')
const clean      = require('./clean')
const build      = require('./build')
const server     = require('./server')
const watch     = require('./watch')

module.exports = series(clean, build, watch, server)
