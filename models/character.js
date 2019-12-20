const Sequelize = require('sequelize');

const DB = process.env.DB


const sequelize = new Sequelize(DB);

// const Model = Sequelize.Model;
// class Character extends Model {}
// Character.init({
//   name: Sequelize.STRING,
//   allowNull: false
// }, {
//   sequalize,
//   modelName: 'character'
// })

const Character = sequelize.define('character', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  //options
});

module.export = Character;
