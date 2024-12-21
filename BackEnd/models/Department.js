const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Department = sequelize.define('Department', {
  DEPT_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, 
  },
  NAME: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  INFO: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
});

module.exports = Department;
