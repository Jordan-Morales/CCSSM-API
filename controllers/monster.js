// Dependencies
const express = require('express');
const router = express.Router();
const db = require('../queries');
// Model
const Monster = require('../models/monster.js');


// // Routes


router.get('/api/monsters', db.getAllMonsters);
router.get('/api/monster/:id', db.getSingleMonster);
router.post('/api/monster', db.createMonster);
router.put('/api/monster/:id', db.updateMonster);
router.delete('/api/monster/:id', db.removeMonster);



module.exports = router;
