const { Router } = require('express')
const controller = require('../controllers/cidade.controller')

module.exports = () => {
  const router = Router()

  router.route('/').post(controller.criar)
  router.route('/').get(controller.listar)
  router.route('/').put(controller.atualizar)
  router.route('/').delete(controller.deletar)

  return router
}
