const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crud_db12', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;