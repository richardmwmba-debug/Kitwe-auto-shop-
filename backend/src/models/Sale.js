const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Sale = sequelize.define('Sale', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  saleNumber: {
    type: DataTypes.STRING,
    unique: true,
  },
  customerId: {
    type: DataTypes.UUID,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  totalAmount: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false,
  },
  discount: {
    type: DataTypes.DECIMAL(12, 2),
    defaultValue: 0,
  },
  tax: {
    type: DataTypes.DECIMAL(12, 2),
    defaultValue: 0,
  },
  finalAmount: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false,
  },
  paymentMethod: {
    type: DataTypes.ENUM('cash', 'card', 'mobile_money'),
    allowNull: false,
  },
  paymentStatus: {
    type: DataTypes.ENUM('pending', 'completed', 'failed'),
    defaultValue: 'pending',
  },
  items: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

module.exports = Sale;
