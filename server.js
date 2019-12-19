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

app.get('/', (req, res) => {
  res.send('hello world.')
});


//--------------------
//Listener
//--------------------

app.listen(PORT, () => {
  console.log("I'm listening on ", PORT);
})
