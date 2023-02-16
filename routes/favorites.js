const express = require('express')
const router = express.Router()
const favoritesController = require("../controllers/favorites"); 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

/*
router.get('/', ensureAuth, favoritesController.getFavorites)

router.post('/createFavorites', favoritesController.createFavorites)

router.put('/addToFavorites', favoritesController.addToFavorites)

router.delete('/removeFromFavorites', favoritesController.removeFromFavorites)
*/

module.exports = router