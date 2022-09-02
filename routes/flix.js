const express = require('express')
const router = express.Router()
const flixController = require("../controllers/flix"); 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, flixController.getFlix)

router.post('/createFlix', flixController.createFlix)

router.put('/markComplete', flixController.markComplete)

router.put('/markIncomplete', flixController.markIncomplete)

router.delete('/deleteFlix', flixController.deleteFlix)

module.exports = router