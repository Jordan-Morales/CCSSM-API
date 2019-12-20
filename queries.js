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
  password: process.env.DB_PASSWORD,
  ssl: true
}



let db = pgp(connection);

const getAllCharacters = (req, res, next) => {
  db.any('SELECT * FROM characters')
    .then((data) => {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'retrieved all characters'
        });
    })
    .catch((err) => {
      return next(err)
    });
}


module.exports = {
  getAllCharacters: getAllCharacters
}
