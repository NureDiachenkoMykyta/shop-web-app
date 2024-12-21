const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Good = require('./Good');

const Sale = sequelize.define('Sale', {
  SALE_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  CHECK_NO: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  GOOD_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Good,
      key: 'GOOD_ID',
    },
  },
  DATE_SALE: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  QUANTITY: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Sale.belongsTo(Good, { foreignKey: 'GOOD_ID' });

module.exports = Sale;
