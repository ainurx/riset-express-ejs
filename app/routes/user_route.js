const express = require('express')
const router = express.Router()

const userControlller = require('../controllers/user_controller')

router.get('/', userControlller.findAll)
router.get('/signin', userControlller.signin)
router.post('/signup', userControlller.create)
router.get('/daftar', userControlller.daftar)

module.exports = router