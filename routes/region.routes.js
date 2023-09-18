const Router = require('express')
const router = new Router()
const regionController = require('../controller/region.controller')

router.get('/:id', regionController.getOneRegion)

module.exports = router