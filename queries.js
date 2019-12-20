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
    .then((data) => {
      res
        .json({
          data: data.data
        });
    })
    .catch((err) => {
      return next(err)
    });
}



module.exports = {
  getAllCharacters: getAllCharacters
}