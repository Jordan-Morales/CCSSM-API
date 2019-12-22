// Dependencies
const express = require('express');
const router = express.Router();
const db = require('../queries');
// Model
const monster = require('../models/user.js');


// Routes


// router.get('/api/users', db.getAllMonsters);
router.get('/api/user/:id', db.getSingleMonster);
router.post('/api/user', db.createMonster);
// router.put('/api/user/:id', db.updateMonster);
// router.delete('/api/user/:id', db.removeMonster);



module.exports = router;
