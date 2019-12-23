//--------------------
// Dependencies
//--------------------

const express = require('express');
const methodOverride = require('method-override');
const app = express()
const session = require('express-session')
const bodyParser = require('body-parser')
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

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// opens method override function
app.use(methodOverride('_method'));
// open session
app.use(session({
  secret:'O6sLoDV18O',
  resave: false,
  saveUninitialized: false
}))

app.use(function(req, res, next) {
  //local host access cors free
  // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  //live site access cors free
  res.header("Access-Control-Allow-Origin", "https://complete-compendium.herokuapp.com/");

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//--------------------
//Routes
//--------------------

//controllers
const characterController = require('./controllers/character.js');
app.use(characterController);

const monsterController = require('./controllers/monster.js');
app.use(monsterController);

const userController = require('./controllers/user.js');
app.use(userController);

app.get('/', (req, res) => {
  res.send('main page');
});


//--------------------
//Listener
//--------------------

app.listen(PORT, () => {
  console.log("I'm listening on ", PORT);
})
