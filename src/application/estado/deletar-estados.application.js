const LOGGER = require('../../logger')([__filename].join())
const Estado = require('../../models/Estado')

module.exports = async ({ ids }) => {
  try {
    LOGGER.debug('Deletando estados no banco de dados...')
    await Estado.deleteMany({ _id: ids })
    LOGGER.debug('Estados deletados com sucesso!')
  } catch (err) {
    LOGGER.error('Erro deletando estados no banco de dados [%o]', err)
    throw err
  }
}
