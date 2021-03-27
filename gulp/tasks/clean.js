const config = require('../config')
const del    = require('del')

const clean = () => del(config.dest.root)

module.exports = clean
