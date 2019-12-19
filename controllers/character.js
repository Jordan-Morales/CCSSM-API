const express = require('express');
const router = express.Router();
const Character = require('../models/character.js')

router.get('/charactergen', (req, res) => {

    res.send(Character);

});

module.exports = router;
