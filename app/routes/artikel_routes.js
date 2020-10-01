const express = require('express')
const router = express.Router()
const artikelController = require('../controllers/artikel_controller')
const { route } = require('./user_route')

router.get('/', artikelController.findAll)
router.get('/:id', artikelController.findById)
router.post('/create', artikelController.create)
router.put('/edit/:id', artikelController.update)
router.delete('/delete/:id', artikelController.delete)

module.exports = router