const {
  criarEstados,
  listarEstados,
  atualizarEstados,
  deletarEstados
} = require('../application/estado')

module.exports = {
  listar: async (req, res) => {
    try {
      const estados = await listarEstados()
      return res.status(200).json(estados)
    } catch (error) {
      return res.sendStatus(500)
    }
  },
  criar: async (req, res) => {
    try {
      const { body } = req
      const estado = await criarEstados(body)
      return res.status(201).json(estado)
    } catch (error) {
      return res.sendStatus(500)
    }
  },
  atualizar: async (req, res) => {
    try {
      const { body } = req
      const estado = await atualizarEstados(body)
      return res.status(200).json(estado)
    } catch (error) {
      return res.sendStatus(500)
    }
  },
  deletar: async (req, res) => {
    try {
      const { body: ids } = req
      await deletarEstados(ids)
      return res.sendStatus(204)
    } catch (error) {
      return res.sendStatus(500)
    }
  }
}
