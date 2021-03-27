const build = require('./gulp/tasks/build')
const start = require('./gulp/tasks/start')
const watch = require('./gulp/tasks/watch')

exports.build = build
exports.watch = watch
exports.start = start
exports.default = build
