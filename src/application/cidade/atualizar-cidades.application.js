const LOGGER = require('../../logger')([__filename].join())
const Cidade = require('../../models/Cidade')
const Estado = require('../../models/Estado')

module.exports = async (cidadeId, { nome, abreviacao, estadoId }) => {
  let cidade
  try {
    LOGGER.debug('Buscando a cidade no banco de dados...')
    cidade = await Cidade.findOne({ _id: cidadeId })

    if (!cidade) {
      LOGGER.error('Cidade não encontrada, id: %s', cidadeId)
      throw new Error('Cidade não encontrada!')
    }

    LOGGER.debug('Cidade encontrada com sucesso, id: %s', cidadeId)
  } catch (err) {
    LOGGER.error('Erro buscando a cidade id: %s no banco de dados [%o]', cidadeId, err)
    throw err
  }

  try {
    LOGGER.debug('Buscando o estado no banco de dados...')
    const estado = await Estado.findOne({ _id: estadoId })

    if (!estado) {
      LOGGER.error('Estado não encontrado, id: %s', estadoId)
      throw new Error('Estado não encontrado!')
    }

    LOGGER.debug('Estado encontrado com sucesso, nome: %s', estado.nome)
  } catch (err) {
    LOGGER.error('Erro buscando o estado no banco de dados [%o]', err)
    throw err
  }

  try {
    await Cidade.updateOne(
      { _id: cidade._id },
      { nome, abreviacao, estadoId }
    )
  } catch (err) {
    LOGGER.error('Erro atualizando a cidade no banco de dados [%o]', err)
    throw err
  }
}
