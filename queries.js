// Allows for Global Promise
let promise = require('bluebird');

let options = {
  promiseLib: promise
};

let pgp = require('pg-promise')(options);
let DB_PASSWORD = process.env.DB_PASSWORD;

let connection = {
  host: 'ec2-107-21-103-80.compute-1.amazonaws.com',
  port: 5432,
  database: 'd27p8cg8c6pl72',
  user: 'fmmhfdwbhagacr',
  password: DB_PASSWORD,
  ssl: true
}

let db = pgp(connection);

// GET ALL ROUTE
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

// GET ONE ROUTE
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

// POST ROUTE
const createCharacter = (req, res, next) => {
  db.none('INSERT INTO characters (public, name, species, age, gender, health, attack, defense, speed, magic, ability)' + ' VALUES ($(public), $(name), $(species), $(age), $(gender), $(health), $(attack)0, $(defense), $(speed), $(magic), $(ability));', req.body)
    .then(() => {
      res.status(200)
      .json({
          status: 'success'
        });
    })
    .catch((err) => {
      return next(err)
    });
}

const updateCharacter = (req, res, next) => {
  // console.log(req.body);
  db.none('UPDATE characters SET public=$1, name=$2, species=$3, age=$4, gender=$5, health=$6, attack=$7, defense=$8, speed=$9, magic=$10, ability=$11 WHERE id=$12', [req.body.public, req.body.name, req.body.species, parseInt(req.body.age), req.body.gender, parseInt(req.body.health), parseInt(req.body.attack), parseInt(req.body.defense), parseInt(req.body.speed), parseInt(req.body.magic), req.body.ability, parseInt(req.body.id)])
    .then(() => {
      res.status(200)
      .json({
          status: 'success'
        });
    })
    .catch((err) => {
      return next(err)
    });
}

const removeCharacter = (req, res, next) => {
  let charID = parseInt(req.body.id);
  db.result('DELETE FROM characters WHERE id = $1', charID)
  .then(() => {
    res.status(200)
    .json({
        status: 'success'
      });
  })
  .catch((err) => {
    return next(err)
  });
}


// GET ALL ROUTE
const getAllMonsters = (req, res, next) => {
  db.any('SELECT * FROM monsters')
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

// GET ONE ROUTE
const getSingleMonster = (req, res, next) => {
  let charID = parseInt(req.params.id);
  db.one('SELECT * FROM monsters WHERE id = $1', charID)
    .then((data) => {
      res.json({
          data: (data)
        });
    })
    .catch((err) => {
      return next(err)
    });
}

// POST ROUTE
const createMonster = (req, res, next) => {
  db.none('INSERT INTO monsters (public, name, species, health, attack, defense, speed, magic, ability)' + ' VALUES ($(public), $(name), $(species), $(health), $(attack)0, $(defense), $(speed), $(magic), $(ability));', req.body)
    .then(() => {
      res.status(200)
      .json({
          status: 'success'
        });
    })
    .catch((err) => {
      return next(err)
    });
}

const updateMonster = (req, res, next) => {
  // console.log(req.body);
  db.none('UPDATE monsters SET public=$1, name=$2, species=$3, health=$4, attack=$5, defense=$6, speed=$7, magic=$8, ability=$9 WHERE id=$10', [req.body.public, req.body.name, req.body.species, parseInt(req.body.health), parseInt(req.body.attack), parseInt(req.body.defense), parseInt(req.body.speed), parseInt(req.body.magic), req.body.ability, parseInt(req.body.id)])
    .then(() => {
      res.status(200)
      .json({
          status: 'success'
        });
    })
    .catch((err) => {
      return next(err)
    });
}

const removeMonster = (req, res, next) => {
  let charID = parseInt(req.body.id);
  db.result('DELETE FROM monsters WHERE id = $1', charID)
  .then(() => {
    res.status(200)
    .json({
        status: 'success'
      });
  })
  .catch((err) => {
    return next(err)
  });
}


module.exports = {
  getAllCharacters: getAllCharacters,
  getSingleCharacter: getSingleCharacter,
  createCharacter: createCharacter,
  updateCharacter: updateCharacter,
  removeCharacter: removeCharacter,
  getAllMonsters: getAllMonsters,
  getSingleMonster: getSingleMonster,
  createMonster: createMonster,
  updateMonster: updateMonster,
  removeMonster: removeMonster
}
