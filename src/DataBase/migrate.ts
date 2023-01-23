import { createPool } from "mysql2";
import sequelize from "./instance";
import user from '../DataBase/models/user';
import category_of_products from '../DataBase/models/category_of_products';
import products from '../DataBase/models/product';
import order from '../DataBase/models/order';
import order_has_product from '../DataBase/models/order_has_product';

async function Connection() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
    
export async function migrate() {
    try {
      await Connection();
      await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
      await user.sync({ force: true });
      await category_of_products.sync({ force: true });
      await products.sync({ force: true });
      await order.sync({ force: true });
      await order_has_product.sync({ force: true });
      console.log('All models were synchronized successfully.');
        } catch (error) {
          console.log(error);
        }
      }
    

migrate();

export {};
