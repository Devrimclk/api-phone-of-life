import { Router } from 'express';

import { route as userRoute } from './routes/user.routes';
import { route as orderRoute } from './routes/order.routes';
import { route as productRoute } from './routes/products.routes';
import { route as category_of_productsRoute } from './routes/category_of_products.routes';
import { route as authRoute } from './routes/auth.routes';
import { route as registerRoute } from './routes/register.routes';

export const route = Router();

route.use('/user', userRoute);
route.use('/order', orderRoute);
route.use('/products', productRoute);
route.use('/category', category_of_productsRoute);
route.use('/auth', authRoute);
route.use('/register', registerRoute);