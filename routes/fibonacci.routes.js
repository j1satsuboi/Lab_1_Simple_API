const Router = require('express')
const router = new Router()
const fibonacciController = require('../controller/fibonacci.controller')

router.get('/:id', fibonacciController.getOneNumber)

module.exports = router