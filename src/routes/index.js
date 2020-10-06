const { Router } = require('express')

const cidade = require('./cidade.routes')
const estado = require('./estado.routes')

module.exports = () => {
  const routes = Router()

  routes.use('/cidade', cidade())
  routes.use('/estado', estado())

  return routes
}
