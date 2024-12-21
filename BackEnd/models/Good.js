const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Department = require('./Department');

const Good = sequelize.define('Good', {
  GOOD_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  NAME: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  PRICE: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  QUANTITY: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  PRODUCER: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  DEPT_ID: {
    type: DataTypes.INTEGER, 
    allowNull: false,
    references: {
      model: Department,
      key: 'DEPT_ID',
    },
  },
  DESCRIPTION: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
});

Good.belongsTo(Department, { foreignKey: 'DEPT_ID', onDelete: 'CASCADE' });

module.exports = Good;
