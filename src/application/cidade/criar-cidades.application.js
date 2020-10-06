const LOGGER = require('../../logger')([__filename].join())
const Cidade = require('../../models/Cidade')
const Estado = require('../../models/Estado')

module.exports = async ({ nome, abreviacao, estadoId }) => {
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
    LOGGER.debug('Criando uma cidade no banco de dados...')
    const cidade = await Cidade.create({
      nome,
      abreviacao,
      estadoId: estado._id
    })
    LOGGER.debug('Cidade criada com sucesso, nome: %s, abreviacao: %s',
      cidade.nome, cidade.abreviacao)
    return cidade
  } catch (err) {
    LOGGER.error('Erro ao tentar criar uma cidade no banco de dados [%o]', err)
    throw err
  }
}
