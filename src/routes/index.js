const { Router } = require('express')

const cidade = require('./cidade.routes')

module.exports = () => {
  const routes = Router()

  routes.use('/cidade', cidade())

  return routes
}
