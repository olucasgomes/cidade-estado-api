const LOGGER = require('../../logger')([__filename].join())
const Cidade = require('../../models/Cidade')

module.exports = async () => {
  try {
    LOGGER.debug('Buscando cidades no banco de dados...')
    const cidades = await Cidade.find()
    LOGGER.debug('Cidades encontradas com sucesso!')
    return cidades
  } catch (err) {
    LOGGER.error('Error buscando cidades no banco de dados [%o]', err)
    throw err
  }
}
