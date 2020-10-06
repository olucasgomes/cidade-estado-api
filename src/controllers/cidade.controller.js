const {
  createCidades,
  readCidades,
  updateCidades,
  deleteCidades
} = require('../application/cidade')

module.exports = {
  read: async (req, res) => {
    try {
      const cidades = await readCidades()
      return res.status(200).json(cidades)
    } catch (error) {
      return res.sendStatus(500)
    }
  },
  create: async (req, res) => {
    try {
      const { body } = req
      const cidade = await createCidades(body)
      return res.status(201).json(cidade)
    } catch (error) {
      return res.sendStatus(500)
    }
  },
  update: async (req, res) => {
    try {
      const { body } = req
      const cidade = await updateCidades(body)
      return res.status(200).json(cidade)
    } catch (error) {
      return res.sendStatus(500)
    }
  },
  delete: async (req, res) => {
    try {
      const { body: ids } = req
      await deleteCidades(ids)
      return res.sendStatus(204)
    } catch (error) {
      return res.sendStatus(500)
    }
  }
}
