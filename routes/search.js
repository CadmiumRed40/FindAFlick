const express = require('express')
const router = express.Router()
const searchController = require("../controllers/search");
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, searchController.getMovie)

module.exports = router;