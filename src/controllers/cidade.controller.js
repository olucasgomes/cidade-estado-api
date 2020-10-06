const {
  criarCidades,
  listarCidades,
  atualizarCidades,
  deletarCidades
} = require('../application/cidade')

module.exports = {
  listar: async (req, res) => {
    try {
      const cidades = await listarCidades()
      return res.status(200).json(cidades)
    } catch (error) {
      return res.sendStatus(500)
    }
  },
  criar: async (req, res) => {
    try {
      const { body } = req
      const cidade = await criarCidades(body)
      return res.status(201).json(cidade)
    } catch (error) {
      return res.sendStatus(500)
    }
  },
  atualizar: async (req, res) => {
    try {
      const { body } = req
      const cidade = await atualizarCidades(body)
      return res.status(200).json(cidade)
    } catch (error) {
      return res.sendStatus(500)
    }
  },
  deletar: async (req, res) => {
    try {
      const { body: ids } = req
      await deletarCidades(ids)
      return res.sendStatus(204)
    } catch (error) {
      return res.sendStatus(500)
    }
  }
}
