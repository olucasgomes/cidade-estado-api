const LOGGER = require('../../logger')([__filename].join())
const Estado = require('../../models/Estado')

module.exports = async (estadoId, { nome }) => {
  let estado
  try {
    LOGGER.debug('Buscando o estado no banco de dados...')
    estado = await Estado.findOne({ _id: estadoId })

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
    await Estado.updateOne(
      { _id: estado._id },
      { nome }
    )
  } catch (err) {
    LOGGER.error('Erro atualizando a cidade no banco de dados [%o]', err)
    throw err
  }
}
