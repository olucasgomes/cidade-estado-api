const LOGGER = require('../../logger')([__filename].join())
const Estado = require('../../models/Estado')

module.exports = async ({ nome }) => {
  try {
    LOGGER.debug('Criando uma estado no banco de dados...')
    const estado = await Estado.create({ nome })
    LOGGER.debug('Estado criado com sucesso, nome: %s', estado.nome)
    return estado
  } catch (err) {
    LOGGER.error('Erro ao tentar criar um estado no banco de dados [%o]', err)
    throw err
  }
}
