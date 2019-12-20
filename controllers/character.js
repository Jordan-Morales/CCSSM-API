// Dependencies
const express = require('express');
const router = express.Router();

// Model
const Character = require('../models/character.js');

// Database Access
const {Pool,Client} = require('pg');
const connectionString = process.env.DB;
const client = new Client({
  connectionString:connectionString
});
client.connect();


// Routes

// Blank array
data = [];
// Database Query
client.query('SELECT * FROM characters', (err,res) => {
  console.log(res.rows);
  data = res.rows;
  client.end();
});
// .get in relation to query
router.get('/characters/', (req, res) => {
  console.log(JSON.stringify(data, null, 4));
  res.send(data);
});

module.exports = router;
