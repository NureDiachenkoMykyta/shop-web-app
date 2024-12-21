const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Department = require('./Department');

const Worker = sequelize.define('Worker', {
  WORKER_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  NAME: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  ADDRESS: {
    type: DataTypes.STRING(40),
    allowNull: true,
  },
  DEPT_ID: {
    type: DataTypes.INTEGER, 
    allowNull: false,
    references: {
      model: Department,
      key: 'DEPT_ID',
    },
  },
  INFORMATION: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
});

Worker.belongsTo(Department, { foreignKey: 'DEPT_ID', onDelete: 'CASCADE' });

module.exports = Worker;
