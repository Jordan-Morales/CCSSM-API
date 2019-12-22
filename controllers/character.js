// Dependencies
const express = require('express');
const router = express.Router();
const db = require('../queries');
// Model
const Character = require('../models/character.js');


// Routes


router.get('/api/characters', db.getAllCharacters);
router.get('/api/characters/:id', db.getSingleCharacter);
router.post('/api/character', db.createCharacter);
router.put('/api/character/:id', db.updateCharacter);
// router.delete('/api/characters', db.removeCharacter);




module.exports = router;
