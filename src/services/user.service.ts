import { Request, Response } from 'express';
import user from '../DataBase/models/user'
import { generateAccessToken } from '../middlewares/auth';

async function create(req: Request, res: Response) {
    const Newuser = req.query;
    const User = await user.create({
      username:Newuser.username,
      email: Newuser.email,
      password: Newuser.password,
      createdAt:new Date(),
      updatedAt:new Date(),
    });
    res.send({ User });
  }
  
  async function updateById(req: Request, res: Response) {
    const User = await user.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (User) {
      res.send({ User });
    } else {
      res.status(404).send({ error: 'NOT FOUND' });
    }
  }
  
  async function deleteById(req: Request, res: Response) {
    const User = await user.destroy({ where: { id: req.params.id } });
    if (User) {
      res.send({ User });
    } else {
      res.status(404).send({ error: 'NOT FOUND' });
    }
  }
  
  export {
    create,
    updateById,
    deleteById,
  };
  