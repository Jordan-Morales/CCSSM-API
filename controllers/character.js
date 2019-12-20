// Dependencies
const express = require('express');
const router = express.Router();
const db = require('../queries');
// Model
const Character = require('../models/character.js');


// Routes


router.get('/api/characters', db.getAllCharacters);

module.exports = router;
