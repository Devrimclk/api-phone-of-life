import { Router } from 'express';
import { register } from '../controllers/user.controllers';

export const route = Router();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
route.post('/', async (req: any, res: any) => {
  await register(req, res);
});
