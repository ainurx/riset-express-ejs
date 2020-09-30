const express = require('express')
const router = express.Router()

const userControlller = require('../controllers/user_controller')

router.get('/', userControlller.findAll)
router.get('/signup', userControlller.create)

module.exports = router