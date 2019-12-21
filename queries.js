let promise = require('bluebird');

let options = {
  promiseLib: promise
};

let pgp = require('pg-promise')(options);

let connection = {
  host: 'ec2-107-21-103-80.compute-1.amazonaws.com',
  port: 5432,
  database: 'd27p8cg8c6pl72',
  user: 'fmmhfdwbhagacr',
  password: '2169c3c5c74891eca065ae23b1328d16c029078557aeb315cbf78e93285d5430',
  ssl: true
}

let db = pgp(connection);

const getAllCharacters = (req, res, next) => {
  db.any('SELECT * FROM characters')
    .then((response) => {
      res.status(200)
        .json({
          data: (response)
        });
    })
    .catch((err) => {
      return next(err)
    });
}

const getSingleCharacter = (req, res, next) => {
  let charID = parseInt(req.params.id);
  db.one('SELECT * FROM characters WHERE id = $1', charID)
    .then((data) => {
      res.json({
          data: (data)
        });
    })
    .catch((err) => {
      return next(err)
    });
}

const createCharacter = (req, res, next) => {
  // const {public, name, species, age, gender, health, attack, defense, speed, magic, ability} = req.body
  req.body.age = parseInt(req.body.age);
  req.body.health = parseInt(req.body.health);
  req.body.attack = parseInt(req.body.attack);
  req.body.defense = parseInt(req.body.defense);
  req.body.speed = parseInt(req.body.speed);
  req.body.magic = parseInt(req.body.magic);
  // console.log(JSON.stringify(req.body));
  console.log(req.body);


  db.none('INSERT INTO characters (public, name, species, age, gender, health, attack, defense, speed, magic, ability)' + ' VALUES ($(public), $(name), $(species), $(age), $(gender), $(health), $(attack)0, $(defense), $(speed), $(magic), $(ability));', req.body)
    .then(() => {
      // res.status(200)
    })
    .catch((err) => {
      return next(err)
    });
}


module.exports = {
  getAllCharacters: getAllCharacters,
  getSingleCharacter: getSingleCharacter,
  createCharacter: createCharacter
}
