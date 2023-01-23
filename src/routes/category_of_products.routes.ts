
import {Router} from 'express';
import { getAll, getById, updateById, deleteById, create} from '../controllers/category_of_products.controllers';


export const route = Router();

route.get ('/', getAll);

route.get ('/:id', getById);

route.put ('/', updateById);

route.delete('/:id', deleteById);

route.post('/', create);

