import sequelize from '../instance';
import orders from './order';
import products from './product';

export const order_has_product = sequelize.define('order_has_product', {
});

orders.belongsToMany(products, { through: order_has_product });
products.belongsToMany(orders, { through: order_has_product });

export default order_has_product;
