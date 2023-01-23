import { DataTypes } from 'sequelize';
import sequelize from '../instance';
import order from './order';

export const User = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});

User.hasMany(order, {});
order.belongsTo(User, {});

export default User;
