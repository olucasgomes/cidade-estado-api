const expressLoader = require('./express.loader')

const LOGGER = require('../logger')([__filename].join())

module.exports = async ({ app }) => {
  await expressLoader({ app })

  LOGGER.debug('Express Loader has initalized successfully!')
}
