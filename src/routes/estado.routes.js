const { Router } = require('express')
const controller = require('../controllers/estado.controller')

module.exports = () => {
  const router = Router()

  router.route('/').post(controller.create)
  router.route('/').get(controller.read)
  router.route('/').put(controller.update)
  router.route('/').delete(controller.delete)

  return router
}
