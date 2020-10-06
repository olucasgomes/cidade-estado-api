const {
  createEstados,
  readEstados,
  updateEstados,
  deleteEstados
} = require('../application/estado')

module.exports = {
  read: async (req, res) => {
    try {
      const estados = await readEstados()
      return res.status(200).json(estados)
    } catch (error) {
      return res.sendStatus(500)
    }
  },
  create: async (req, res) => {
    try {
      const { body } = req
      const estado = await createEstados(body)
      return res.status(201).json(estado)
    } catch (error) {
      return res.sendStatus(500)
    }
  },
  update: async (req, res) => {
    try {
      const { body } = req
      const estado = await updateEstados(body)
      return res.status(200).json(estado)
    } catch (error) {
      return res.sendStatus(500)
    }
  },
  delete: async (req, res) => {
    try {
      const { body: ids } = req
      await deleteEstados(ids)
      return res.sendStatus(204)
    } catch (error) {
      return res.sendStatus(500)
    }
  }
}
