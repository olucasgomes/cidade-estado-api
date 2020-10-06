const LOGGER = require('../../logger')([__filename].join())
const Cidade = require('../../models/Cidade')

module.exports = async (ids) => {
  try {
    LOGGER.debug('Deletando cidades no banco de dados...')
    await Cidade.deleteMany({ _id: ids })
    LOGGER.debug('Cidades deletadas com sucesso!')
  } catch (err) {
    LOGGER.error('Erro deletando cidades no banco de dados [%o]', err)
    throw err
  }
}
