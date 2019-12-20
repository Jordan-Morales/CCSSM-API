//--------------------
// Dependencies
//--------------------

const express = require('express');
const methodOverride = require('method-override');
const app = express()
const session = require('express-session')
require('dotenv').config();
const Sequelize = require('sequelize');

//--------------------
// PORT
//--------------------

const PORT = process.env.PORT

//--------------------
// DATABASE
//--------------------

const DB = process.env.DB
// console.log(DB);

const sequelize = new Sequelize(DB);

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('sql server connected');
//   })
//   .catch((err) => {
//     console.log('sql server connection error: ', err);
//   })


// // Error / success
// db.on('error', (err) => console.log(err.message + ' is server not running?'));
// db.on('connected', () => console.log('server connected'))
// db.on('disconnected', () => console.log('server disconnected'));

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

// app.get('/', (req, res) => {
//   res.send('hello world.')
// });

app.get('/', (req, res) => {
  res.json()
})


//--------------------
//Listener
//--------------------

app.listen(PORT, () => {
  console.log("I'm listening on ", PORT);
})
