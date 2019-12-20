//--------------------
// Dependencies
//--------------------

const express = require('express');
const methodOverride = require('method-override');
const app = express()
const session = require('express-session')
require('dotenv').config();

//--------------------
// PORT
//--------------------

const PORT = process.env.PORT

//--------------------
// DATABASE
//--------------------

// const {Pool,Client} = require('pg');
// const connectionString = process.env.DB;
//
// const client = new Client({
//   connectionString:connectionString
// })
//
// client.connect();


//--------------------
// Middleware
//--------------------

// open public folder
app.use(express.static('public'));
//urlencoding false
app.use(express.urlencoded( {extended: false} ));
// opens method override function
app.use(methodOverride('_method'));
// open session
app.use(session({
  secret:'O6sLoDV18O',
  resave: false,
  saveUninitialized: false
}))

//--------------------
//Routes
//--------------------

//controllers
const characterController = require('./controllers/character.js');
app.use(characterController);

// // Blank array
// data = [];
// // Database Query
// client.query('SELECT * FROM characters', (err,res) => {
//   console.log(res.rows);
//   data = res.rows;
//   client.end();
// });
// // .get in relation to query

app.get('/', (req, res) => {
  res.send('main page');
});


//--------------------
//Listener
//--------------------

app.listen(PORT, () => {
  console.log("I'm listening on ", PORT);
})
