// Dependencies
const express = require('express');
const router = express.Router();
const db = require('../queries');
// Model
const User = require('../models/user.js');


// // Routes

// router.get('/api/users', db.getAllUsers);
router.get('/api/user/:id', db.getSingleUser);
router.post('/api/user', db.createUser);
// router.put('/api/user/:id', db.updateUser);
// router.delete('/api/user/:id', db.removeUser);

module.exports = router;
