/* eslint-disable @typescript-eslint/no-explicit-any */

import {Router} from 'express';
import { getAll, getById, updateById, deleteById, create} from '../controllers/user.controllers';
import { authenticateJWT } from '../middlewares/auth';

export const route = Router();

route.get ('/', authenticateJWT, async (req: any, res: any) => {
    await getAll(req, res);
  });

route.get ('/:id', authenticateJWT, async (req: any, res: any) => {
    await getById(req, res);
  });

route.patch('/:id', authenticateJWT, async (req: any, res: any) => {
    await updateById(req, res);
  });
  
route.delete('/:id',authenticateJWT, async (req: any, res: any) => {
    await deleteById(req, res);
  });  

route.post('/', authenticateJWT, async (req: any, res: any) => {
    await create(req, res);
  });
