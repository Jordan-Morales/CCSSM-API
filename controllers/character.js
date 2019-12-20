// Dependencies
const express = require('express');
const router = express.Router();
const db = require('../queries');
// Model
const Character = require('../models/character.js');


// Routes


router.get('/api/characters', db.getAllCharacters);
// router.get('/api/characters/:id', );
// router.post('/api/characters',);
// router.put('/api/characters',);
// router.delete('/api/characters',);




module.exports = router;
