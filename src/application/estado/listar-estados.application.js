const LOGGER = require('../../logger')([__filename].join())
const Estado = require('../../models/Estado')

module.exports = async () => {
  try {
    LOGGER.debug('Buscando estados no banco de dados...')
    const estados = await Estado.find()
    LOGGER.debug('Estados encontrados com sucesso!')
    return estados
  } catch (err) {
    LOGGER.error('Error buscando estados no banco de dados [%o]', err)
    throw err
  }
}
