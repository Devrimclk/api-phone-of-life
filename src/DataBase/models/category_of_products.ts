import { DataTypes } from 'sequelize';
import sequelize from '../instance';
import products from './product';

export const Category = sequelize.define('Categories', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});

Category.hasMany(products, {});
products.belongsTo(Category, {});

export default Category;
