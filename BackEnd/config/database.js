const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Shop', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
