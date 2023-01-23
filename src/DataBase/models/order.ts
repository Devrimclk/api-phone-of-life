import { DataTypes } from 'sequelize';
import sequelize from '../instance';

export const Order = sequelize.define('Orders', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  adress: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});

export default Order;
